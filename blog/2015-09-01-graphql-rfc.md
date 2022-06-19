---
layout: post
title: "GraphQL 살펴보기"
tags: [graphql]
---

## Status Quo

이전에 [GraphQL과 Relay](http://dittos.github.io/2015/05/15/graphql-and-relay/)에 대해 글을 썼습니다. 그때는 GraphQL과 Relay의 실체가 없었는데 2015년 7월에 [ReactEurope 컨퍼런스에서 GraphQL RFC가 공개](https://www.youtube.com/watch?v=WQLzZf34FJ8)되었고 8월에 [Relay Technical Preview가 공개](http://facebook.github.io/react/blog/2015/08/11/relay-technical-preview.html)되었습니다.

그러나 이 기술들이 공개된 지 2달도 채 지나지 않았기 때문에, 아직 진지하게 쓰기에는 생태계가 전반적으로 미숙한 상황으로 보입니다.

현재 성숙한 GraphQL 구현이 레퍼런스 구현인 [graphql-js](https://github.com/graphql/graphql-js) 뿐이어서 당장 GraphQL을 지원하는 서버를 작성하기가 쉽지 않습니다. 그래서 GraphQL의 파이썬 구현인 [graphqllib](https://github.com/dittos/graphqllib)를 만들고 있지만 진도가 더딘 편입니다. 처음에 graphql-js를 포팅하며 시작했는데, graphql-js의 API가 자주 바뀌어 따라가지 못하는 상황입니다.

또한 웹이 아닌 환경을 위한 GraphQL 클라이언트 구현이 아직 존재하지 않아서, 그 쪽도 연구가 필요해 보입니다. 페이스북에서 좀 더 여러가지 라이브러리를 공개해주면 해결되리라 생각합니다. (얼마 전에 C++ 파서 구현인 [libgraphqlparser](https://github.com/graphql/libgraphqlparser)도 공개되었습니다.)

어쨌든 이제 실제 문서와 코드를 볼 수 있기 때문에 이전에 애매했던 것이 명확해졌습니다. 그래서 GraphQL에 대해 제대로 다시 소개해서 예전 글을 보강하고자 합니다. [RFC 스펙 문서](http://facebook.github.io/graphql/)는 상당히 격식 있게 쓰여 있기 때문에(어렵지는 않지만), 스펙 문서만 읽어서는 GraphQL이 어떤 것인지 금방 감이 오지는 않습니다. 그래서 GraphQL 스펙을 중요하다고 생각되는 부분만 매우 간단히 요약하였습니다.


## GraphQL이란?

GraphQL은 클라이언트 애플리케이션에서 어떤 데이터가 필요한지 기술할 수 있는 쿼리 언어입니다. 대부분의 REST API에서는 실제 클라이언트가 표시하는 형태와 API 프로토콜이 일치하지 않는 경우가 많습니다. (심지어, 의도적으로 뷰와 독립적으로 설계하는 편입니다.) 이와 달리 GraphQL은 *쿼리를 클라이언트의 UI 계층 구조와 유사하게 구성할 수 있습니다.* 따라서 쿼리가 하나의 커다란 트리를 이룹니다.

<figure>
<img src="/public/img/2015-08-31-graphql-example.jpg" alt="GraphQL 쿼리의 예" />
<figcaption>사용자 프로필 컴포넌트를 GraphQL 쿼리로 나타낸 예 (courtesy of <a href="https://speakerdeck.com/laneyk/mutations-in-relay?slide=43">Laney Kuenzel</a>)</figcaption>
</figure>

GraphQL은 *스키마가 미리 정의되어 있는 강타입 언어입니다.* 타입은 정적 분석으로 실수를 줄이는데도 도움을 주지만, 무엇보다 그 자체로 문서의 역할도 하므로 개발자 사이의 커뮤니케이션에도 도움이 됩니다. 또한 introspection을 통해 스키마 정보를 GraphQL로 쿼리할 수 있고, 이를 이용해 툴을 만들 수 있습니다.

<figure>
    <img src="https://raw.githubusercontent.com/graphql/graphiql/master/resources/graphiql.png" alt="GraphiQL" />
    <figcaption><a href="https://github.com/graphql/graphiql">GraphiQL</a> &mdash; Introspection을 사용하는 GraphQL IDE</figcaption>
</figure>


### 실렉션 세트(selection set)

객체의 어떤 필드를 선택할 것인지 실렉션 세트로 나타낼 수 있습니다. 다음은 가장 간단한 형태입니다.

```
{
    id
    text
}
```

`id`, `text` 필드를 선택하는 쿼리입니다. 쿼리를 실행하면 다음과 같은 JSON 형식의 결과가 나올 것입니다.

```javascript
{
    "id": 42,
    "text": "Hello, world!"
}
```

### 인자(argument)

필드에는 인자를 넘길 수 있습니다.

```
{
    pictureURL(width: 50, height: 50)
}
```

참고로 GraphQL은 SQL 같은 강력한 쿼리 언어는 아닙니다. GraphQL 표준에서는 인자에 따른 실제 반환값의 시맨틱은 정해져있지 않습니다. (`WHERE`나 `ORDER BY` 같은 것이 따로 없고, 인자의 이름은 GraphQL 표준 입장에서는 임의의 문자열입니다.)

별명(alias)으로 필드 이름을 바꿀 수 있습니다. 같은 필드를 다른 인자로 가져올 때도 사용합니다.

```
{
    fullName: name
    smallPic: profilePic(size: 64)
    bigPic: profilePic(size: 1024)
}
```

### 실렉션 세트의 중첩

만약 필드가 객체나 리스트 타입(스칼라가 아닌 타입)이라면 하위 객체의 실렉션 세트를 **반드시** 명시해야 합니다.

```
{
    id
    text
    author {
        name
        pictureURL(width: 50, height: 50)
        posts {
            id
            text
        }
    }
}
```

### 왜 모든 필드를 반드시 명시해야 할까?

기존에 있는 애플리케이션을 GraphQL로 표현해보려 하면 모든 필드를 명시하는 것이 생각보다 귀찮습니다. 하지만 제가 생각하기에는 다음과 같은 장점이 있습니다.

* *꼭 필요한 데이터만 가져오므로 성능에 도움이 됩니다.* 통신하는 데이터 양을 절약할 수 있고 서버에서도 낭비되는 자원을 줄일 수 있습니다.
* 어떤 필드를 요청했는지 분명하기 때문에 *필드가 응답에 포함되어 있지 않은 경우의 모호함이 없습니다.* 필드가 들어오지 않았을 때 실제 서버 상에서 그 필드가 비어있을 수도 있고 요청한 표현 방식에서 생략되었을 수도 있는데, 모든 필드를 명시하면 이런 문제가 없습니다.

### 쿼리 루트(query root)

앞서 살펴본 예제들은 이미 어떤 객체가 주어졌다고 가정하고 작성되어 있습니다. 그렇다면 이 최상위 객체는 어디서 오는 것일까요. 일반적인 REST API라면 URL로 리소스를 찾게 되지만, GraphQL API는 하나의 엔드포인트를 사용하는 것이 컨벤션입니다. (강제되는 것은 아닙니다)

GraphQL 쿼리의 가장 바깥 실렉션 세트는 '쿼리 루트' 객체로부터 시작하도록 정해져 있습니다. 따라서 GraphQL 서버는 *쿼리 루트에 인터페이스의 시작점들을 노출할 수 있습니다.* 가령 현재 사용자나 특정 ID의 글을 가져오는 것 등이겠지요.

```
{
    # 나는 누구인가?
    me {
        name
    }

    # id=42인 글 찾기
    post(id: "42") {
        title
    }
}
```


### 프래그먼트(fragment)

같은 실렉션 세트가 한 쿼리 안에서 중복될 수 있습니다. 예를 들어 한 화면에 글쓴이의 프로필과 댓글 작성자의 프로필이 나오는데 같은 컴포넌트를 쓴다면 같은 필드가 필요할 것입니다. 이때 *프래그먼트를 사용하여 중복을 제거할 수 있습니다.*

```
# GraphQL 문서에 쿼리 하나만 있는 경우가 아니면 명시적으로 쿼리임을 나타내야 합니다.
query sampleQuery {
    post(id: "4") {
        id
        text
        author { ...basicUserInfo }
    }
    users {
        ...basicUserInfo
    }
}

# User 타입에 대한 프래그먼트임을 명시했습니다.
fragment basicUserInfo on User {
    name
    pictureURL(width: 50, height: 50)
}
```

이처럼 프래그먼트는 조합이 가능한데, 이는 [Relay](http://facebook.github.io/relay/) 프레임워크의 핵심 기능으로 사용됩니다. 각 뷰마다 프래그먼트를 가지고 있고, 이 프래그먼트들이 뷰 계층의 가장 아래에서부터 조합되어 하나의 큰 GraphQL 쿼리를 구성하게 됩니다.

GraphQL은 다형성을 지원합니다. 인터페이스로 공통 필드를 정의할 수 있고, 유니온(union) 타입으로 여러 타입을 하나로 묶을 수 있습니다. *여러 타입을 가지는 필드도 프래그먼트의 타입 조건으로 구별할 수 있습니다.*

```
query samplePolymorphicQuery {
    timeline {
        data { # data는 Post 또는 User의 리스트
            # 인라인 프래그먼트, Post 타입일 때
            ... on Post {
                title
            }

            # 프래그먼트 참조. User 타입일 때
            ...basicUserInfo
        }
    }
}
```

### 뮤테이션(mutation)

GraphQL은 데이터의 읽기 외에 쓰기(변형)도 지원합니다. 쿼리와 뮤테이션은 거의 같은 문법을 가지고 있지만, 쿼리는 필드를 순서 없이 평가하는 반면 *뮤테이션의 필드는 항상 순서대로 평가합니다.* 또한 쿼리가 쿼리 루트로부터 시작하는 것처럼 뮤테이션은 뮤테이션 루트에서 시작합니다.

```
mutation sampleMutation {
    setName(name: "Zuck") {
        newName
    }
}
```

## Relay의 GraphQL 확장

[Relay](http://facebook.github.io/relay/)는 GraphQL과 React로 애플리케이션을 개발하기 위한 프레임워크입니다. GraphQL에서는 기본적인 쿼리 시스템만 정의하기 때문에 실제 애플리케이션을 구현하려면 어느 정도 정해진 컨벤션이 필요합니다. [Relay에서 정의한 컨벤션](http://facebook.github.io/relay/docs/graphql-relay-specification.html#content)이 꼭 Relay를 쓰는 경우가 아니라도 쓸만하기 때문에 소개하겠습니다. 그리고 제목을 '확장'이라고 적긴 했지만 GraphQL을 확장한다기보다 몇가지 제약 조건을 추가했다고 보는 것이 좀 더 정확합니다.

### 커넥션(connection)

일대다 관계를 표현하기 위한 컨벤션입니다. Post 하위의 Comment 콜렉션을 가져오는 예를 들어보겠습니다.

```
{
    comments(first: 5) { # CommentConnection
        edges { # CommentEdge
            cursor
            node { # Comment
                author { name }
                text
            }
        }
        pageInfo {
            hasNextPage
            hasPreviousPage
        }
    }
}
```

먼저, 커넥션을 리턴하는 필드는 `first`/`after`, `last`/`before` 인자를 받아야 합니다. `comments(first: 5, after: "some cursor")`는 `first 5 comments after "some cursor"`처럼 읽으면 됩니다. `some cursor` 이후의 댓글 5개를 가져오는 쿼리입니다.

커넥션 타입의 이름은 `Connection`으로 끝나야 하며 `edges`와 `pageInfo` 필드를 가집니다.

* `edges`는 `node`와 `cursor` 필드를 가지고 `Edge`로 끝나는 이름의 타입의 리스트를 리턴해야 합니다. `node`는 항목의 실제 값이고 `cursor`는 결과를 페이지로 나눠 탐색하는데 사용하는 값입니다.
* `pageInfo`는 현재 가져온 데이터보다 앞/뒤로 데이터가 더 있는지 나타냅니다.


## 더 알아보기

* [GraphQL (Working Draft)](http://facebook.github.io/graphql/)
* [graphql-js](https://github.com/graphql/graphql-js): GraphQL의 자바스크립트 레퍼런스 구현입니다.
* [Relay](http://facebook.github.io/relay/): GraphQL과 React로 애플리케이션을 개발할 수 있는 프레임워크입니다.
* [graphql-relay-js](https://github.com/graphql/graphql-relay-js): graphql-js에 Relay의 GraphQL 컨벤션을 제공하는 모듈입니다.
* [graphql-swapi](http://graphql-swapi.parseapp.com/graphiql/): GraphQL 버전의 [SWAPI](http://swapi.co)를 GraphQL 쿼리 브라우저인 [GraphiQL](https://github.com/graphql/graphiql)로 직접 쿼리해볼 수 있습니다. 구조를 이해하는데 도움이 됩니다.

