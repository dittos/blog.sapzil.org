---
layout: post
title: "GraphQL과 Relay: 웹 애플리케이션 개발의 미래"
tags: [graphql, relay, javascript, web]
---

Facebook은 React.js Conf 2015에서 [Relay와 GraphQL](https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html)이라는 두 가지 기술을 공개했습니다. (같은 날 발표된 React Native 때문에 약간 묻힌 것도 같지만...) 아직 공개된 코드는 없는데, 올해 안에 오픈소스로 릴리즈 예정이라고 합니다.

개인적으로는 최근 몇년 동안 고민하던 문제를 제대로 된 방법으로 해결해줄 것으로 보여서 굉장히 큰 기대를 하고 있습니다. 이 글에서 제가 왜 이렇게 흥분(...)하고 있는지 설명해보려 합니다.


## N+1 쿼리 문제

[N+1 쿼리 문제](https://secure.phabricator.com/book/phabcontrib/article/n_plus_one/)는 ORM을 사용해서 DB에 접근할 때 자주 발생합니다. 꽤 잘 알려진 문제이긴 하지만 간단히 예를 들어보겠습니다.

게시판의 글 목록에서 사용자의 이름을 표시해야 한다고 생각해봅시다. 가장 간단하게는 다음과 같이 될 것입니다. (Django로 예를 들었지만, 다른 스택에서도 비슷하겠죠.)

```py
# views.py
def list_post(request):
  posts = Post.objects.order_by('-id')
  return render_template('list.html', posts=posts)
```

```django
{% raw %}
{# list.html #}
{% for post in posts %}
  {{ post.title }} by {{ post.user.name }}
{% endfor %}
{% endraw %}
```

이 경우, 루프 안에서 `post.user`를 가져오는 쿼리를 다시 날리게 되므로 글의 갯수만큼 쿼리가 더 발생하게 됩니다. 그래서 **N+1 쿼리** 문제라고 합니다. 이를 해결하기 위해서 글 목록을 가져올 때 사용자 정보도 함께 가져오도록 합니다. (JOIN을 사용하게 되겠죠.)

```py
# views.py
def list_post(request):
  posts = Post.objects.order_by('-id') \
    .select_related('user') # 추가!
  return render_template('list.html', posts=posts)
```

이제 한번의 쿼리만으로 글 목록과 사용자 정보를 가져올 수 있게 되었네요! 그런데 잘 생각해보면 미묘한 문제점이 몇 가지 있습니다.

* 사용자의 정보가 필요하다는 사실은 `list.html` 템플릿이 알고 있는데, 실제로 사용자 정보를 미리 가져오는 코드는 `views.py`에 있습니다. 관심사의 분리(separation of concerns)가 제대로 되지 않았다고 볼 수 있습니다.
* 템플릿에서는 사용자의 이름만 필요한데, 쿼리에서는 사용자의 모든 필드를 가져오게 되어 있습니다.
* 만약 `views.py`를 사용자의 이름 필드만 가져오도록 고친다면, `list.html`에서 사용자의 다른 필드가 필요해졌을 때 `views.py`도 수정해야 합니다. 즉 `views.py`와 `list.html` 사이에 보이지 않는 의존성이 생기게 됩니다.

사실 보통 DB 서버는 웹 서버와 매우 가까이 있기 때문에 N+1 쿼리 문제로 인한 오버헤드가 엄청나게 크지는 않습니다. 그래서 앞서 제기한 문제는 사소한 것일지도 모릅니다.


## 단일 페이지 애플리케이션

지금은 2015년이죠! 서버에서 HTML을 생성하는 것은 너무 구닥다리 같군요. (넝담~ ㅎㅎ) 클라이언트 측 자바스크립트에서 API 서버와 통신해서 인터페이스를 그려봅시다.

이제 서버와 클라이언트가 확실하게 분리되었기 때문에 템플릿에서 데이터가 필요해졌을때 lazy하게 가져오는 방식은 사용할 수 없습니다. 중간에 필요한 데이터를 다시 API 서버에서 가져오는 것은 너무 부담이 큽니다. 즉 N+1 쿼리 문제가 발생하면 안됩니다. 따라서 한번의 API 요청으로 필요한 데이터를 모두 가져와야 합니다.

보통의 REST API라면 이런 경우에 글 목록에 무조건 사용자 정보를 붙여서 해결하게 됩니다. 좀 더 세밀한 조정이 필요하다면 `?include_user=true`와 같은 파라미터로 켜고 끌 수 있게 하거나, 사용자 정보에서 일부 필요한 필드만 들어있는 형태와 전체 필드가 들어있는 형태를 선택할 수 있게 하기도 합니다. 아니면 글 목록 '뷰'를 위한 별도의 API 엔드포인트를 추가할 수도 있겠죠.

문제는 이러한 요구사항이 꽤 자주 발생함에도 불구하고 그때그때 ad hoc하게 적당히 해결만 하고 넘어가게 된다는 것입니다. 주의를 기울이지 않으면 금방 일관성 없는 API가 되어버립니다. 그리고 주로 클라이언트를 구현하다가 서버에서 내려주는 데이터에 빠진 게 있다는 것을 알게 되죠. 만약 클라이언트와 서버를 구현하는 팀이 다르다면 고스란히 커뮤니케이션 비용 증가로 이어집니다.

만약 SQL 쿼리처럼 클라이언트에서 서버의 데이터 형식을 결정할 수 있는 일반적인 방법이 있다면 어떨까요?


## GraphQL

위에서 제기한 문제를 해결해주는 것이 [GraphQL](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html)입니다. 다음은 GraphQL 쿼리의 예입니다.

```javascript
{
  user(id: 3500401) {
    id,
    name,
    isViewerFriend,
    profilePicture(size: 50)  {
      uri,
      width,
      height
    }
  }
}
```

위와 같은 쿼리는 다음의 JSON 응답 형식을 반환합니다.

```json
{
  "user" : {
    "id": 3500401,
    "name": "Jing Chen",
    "isViewerFriend": true,
    "profilePicture": {
      "uri": "http://someurl.cdn/pic.jpg",
      "width": 50,
      "height": 50
    }
  }
}
```

아직 자세히 공개된 바는 없지만, 서버에서 GraphQL 타입 시스템에 따라 스키마를 정의하면 클라이언트에서 원하는 형식대로 쿼리가 가능하다고 합니다. 또한 GraphQL은 Facebook의 모바일 앱이 HTML5 기반에서 네이티브로 옮겨갈 때 쯤부터 사용되었다고 하니 Facebook 정도로 충분히 복잡한 애플리케이션도 잘 표현할 수 있을 것으로 예상되며, 웹 애플리케이션 외의 영역에서도 쓸모가 있다고 볼 수 있습니다.


## 컴포넌트와 데이터 페칭

아까 글 목록 예제에서 나왔던 템플릿을 재사용할 수 있고 관리하기 편하도록 여러 개의 '컴포넌트'로 분리한다고 생각해봅시다. 다음과 같은 계층 구조를 만들어볼 수 있습니다.

* PostList
  * PostItem
    * UserInfo
  * PostItem
    * UserInfo
  * ...

`UserInfo`는 작성자의 이름을, `PostItem`에서는 글 제목을 보여준다고 합시다. 이때 `PostItem`에서는 `UserInfo`에 작성자 이름을 넘겨줘야 하므로 `PostList`에서 글 목록을 가져올 때 작성자의 이름도 가져와야 합니다.

만약 `UserInfo`에서 작성자의 프로필 사진도 보여주고 싶다면 어떻게 해야 할까요? 실제로 데이터를 가져오는 코드는 `PostList`에 있으므로, `PostList`에서 작성자의 프로필 사진을 가져오도록 수정해야 합니다. 그러나 `PostList`는 `PostItem`만을 명시적으로 참조하고 있으므로 `PostList`와 `UserInfo` 사이에는 보이지 않는 의존 관계가 생기게 됩니다. `UserInfo`를 포함한 컴포넌트가 `PostList` 뿐이라면 괜찮을지도 모르지만 더 많은 곳에서 사용되고 있다면 모든 사용처를 찾아서 수정하는 것은 매우 힘든 일이 될 것입니다.


## Relay

[Relay](https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html)는 React 애플리케이션을 위한 데이터 관리 프레임워크입니다. Relay의 중요한 특징은 각 컴포넌트**마다** 필요한 데이터를 선언하고, 컴포넌트의 계층 구조를 따라서 필요한 데이터를 상위 컴포넌트로 **전달** 및 조합하여 단일 GraphQL 쿼리로 만들어 준다는 것입니다. (그래서 이름이 Relay인 것이죠!)

방금 전에 살펴보았던 컴포넌트 간의 보이지 않는 의존성 문제도 Relay의 방식을 사용한다면 해결할 수 있습니다. `UserInfo`는 사용자의 이름이 필요합니다. `PostItem`은 `UserInfo`에서 필요한 모든 데이터와 글의 제목이 필요합니다. 최종적으로 `PostList`는 `PostItem`에서 필요한 모든 데이터를 가져오면 됩니다. `UserInfo`에서 프로필 사진이 필요해진다면 `UserInfo` 컴포넌트만 수정하면 됩니다. 

뿐만 아니라 데이터를 변경할 때 서버의 응답이 오기 전에 미리 수정사항을 반영해주는 기능(optimistic update), 데이터의 일부분만 캐시에서 미리 가져올 수 있는 기능 등도 제공할 것이라고 합니다. 구체적인 구현이 어떻게 될지는 알 수 없지만 자연스럽게 가능하다면 정말 편리할 것입니다.

[Facebook Groups](https://itunes.apple.com/kr/app/facebook-groups/id931735837?mt=8) iOS 앱에서 Relay를 사용하고 있다고 합니다. (React Native 앱이기도 합니다)

<figure>
<img src="https://reactjs.org/static/relay-architecture-1c7e934642028c84d5af545a945394ef-de0cd.png" alt="Relay Architecture" />
<figcaption>Relay 아키텍쳐 <a href="https://facebook.github.io/react/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html#the-relay-architecture">(출처)</a></figcaption>
</figure>


## 더 읽어보기

* [React Blog - Introducing Relay and GraphQL](https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html)
* [React Blog - Building The Facebook News Feed With Relay](https://facebook.github.io/react/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html)
* [React Blog - GraphQL Introduction](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html)
* [F8 2015 - React Native & Relay: Bringing Modern Web Techniques to Mobile](https://youtu.be/X6YbAKiLCLU?t=10m46s) (동영상 / 10:46~)
* [Unofficial Relay FAQ](https://gist.github.com/wincent/598fa75e22bdfa44cf47)
* [First Thoughts on GraphQL](http://hueypetersen.com/posts/2015/02/02/first-thoughts-on-graph-ql/)

