---
layout: post
title: "애니메타의 React 서버 렌더링 아키텍쳐"
tags: [react, javascript, web, ssr]
---

[애니메타](https://animeta.net/)는 제가 2009년부터 취미로 개발하고 있는 사이트입니다. 애니메이션 감상 기록을 공유하는 서비스로, 적당한 방문자와 적당한 활성 사용자를 가진 적당한 규모를 가지고 있어서 기능 추가보다는 여러가지 기술적인 실험의 장이 되고 있습니다. (유저 여러분께는 죄송합니다...)

처음에는 Django와 jQuery로 작성되어 있던 사이트를 React 기반으로 전환한 경험을 공유하려고 합니다. 프로젝트는 [소스 코드가 공개](https://github.com/dittos/animeta)되어 있으니 궁금하신 분은 참고하시면 됩니다.


## 서버 렌더링

서버 렌더링은 클라이언트측 JavaScript 애플리케이션을 서버에서 미리 HTML으로 렌더링하는 기술입니다. 몇 년 전만 하더라도 서버와 클라이언트에서 같은 뷰 코드를 사용하는 "isomorphic" 애플리케이션은 [성배로 불리기도 했었는데요.](http://nerds.airbnb.com/weve-launched-our-first-nodejs-app-to-product) React에서는 [ReactDOMServer.renderToString](https://facebook.github.io/react/docs/environments.html#node.js) API를 사용하면 꽤 쉽습니다. 오히려 렌더링에 필요한 데이터를 준비하는 일이 복잡합니다.

서버에서 미리 렌더링을 하는 이유는 거의 SEO (검색엔진 최적화)를 위해서입니다. 이제 [Google은 JavaScript도 실행해서 크롤링할 수 있다](https://webmasters.googleblog.com/2014/05/understanding-web-pages-better.html)고는 하지만 검색 랭킹에서 어떤 영향을 받는지, 모든 JavaScript가 언제나 실행되는 것인지 분명하게 밝혀지지 않았습니다.

또 하나의 이유는 더 나은 사용자 경험입니다. 특히 체감 속도면에서 아주 크진 않지만 장점이 있다고 봅니다. 완전히 클라이언트에서만 실행되는 애플리케이션은 JavaScript 코드를 모두 다운받고 필요한 데이터를 가져올 때까지 빈 화면이 보이다 한번에 렌더링되는게 보통입니다. 서버에서 미리 HTML을 내려주면 초기 레이턴시는 약간 늘어나겠지만 점진적으로 내용을 표시하는 것이 가능합니다. 렌더링에 필요한 데이터도 서버 내에서 미리 가져오면 DB나 API 서버에서 가까우니 훨씬 빠르게 가져올 수 있습니다. 물론 자바스크립트를 끄거나 불러오지 못한 경우에도 내용을 볼 수 있는 건 덤입니다.


## 과도기

<figure>
<img src="/public/img/2016-07-animeta-ssr-pre.png" alt="과도기" />
<figcaption>과도기의 구조</figcaption>
</figure>

한번에 최종 구조로 전환할 수 있었으면 좋았겠지만 취미 프로젝트의 특성상 집중적으로 긴 시간을 사용하기는 힘듭니다. 따라서 조금씩 전환할 수 있는 방식을 처음에 적용했습니다. 위의 그림에서 알 수 있듯이 기존의 DB 접근 코드는 그대로 두고 Django 템플릿으로 되어있던 뷰만 React로 다시 작성합니다. 그리고 DB에서 가져온 데이터를 별도의 Node.js 렌더 서버에 JSON으로 전달하여 React 컴포넌트를 HTML로 렌더링하는 것입니다.

이러한 방법도 실제로 유효한 접근이고 널리 사용되고 있습니다. [ReactJS.NET](http://reactjs.net/), [react-rails](https://github.com/reactjs/react-rails), [Hypernova](https://github.com/airbnb/hypernova) 등이 비-JS 서버에서 렌더 서버를 호출하는 방식입니다.

하지만 최종 목표는 다음과 같이 서버와 클라이언트가 하나의 코드를 공유하고, 첫 로딩 이후에는 클라이언트가 직접 API 서버와 통신하는 구조입니다.

<figure>
<img src="/public/img/2016-07-animeta-ssr-final.png" alt="최종 목표" />
<figcaption>최종 목표</figcaption>
</figure>

따라서 다음 단계는 [Node.js로 프론트엔드 서버를 작성하는 작업](https://github.com/dittos/animeta/commit/e0c3ed7a16ccdac21727ebbe70fa27a687118949)이었습니다. 여전히 서버와 클라이언트 사이에 코드가 모두 공유되는 것은 아니지만 Django에서 바로 DB에 접근하던 것을 Node.js 서버에서 API 서버를 호출하는 식으로 바꾸는 것입니다. 아직 Django인 페이지와 프론트엔드 서버를 통하는 페이지가 공존하는 혼돈의 상태가 한동안 지속되었지만 결국 모든 페이지를 포팅하였습니다.


## React Router + Redux

요즘 웬만한 React 애플리케이션은 React Router와 Redux를 씁니다. 애니메타도 마찬가지로 React Router와 Redux로 서버 렌더링을 시도했습니다. 잘 작동하고 isomorphic 애플리케이션이라는 목표를 달성하긴 했지만 몇가지 만족스럽지 못한 부분들이 있었습니다.

React Router가 마음에 들지 않았던 점은 계층 구조 때문에 데이터를 중복으로 가져오는 경우가 발생하는 것입니다. 하나의 페이지가 여러 층의 route로 구성되는데 각 route는 서로를 알지 못하므로 같은 데이터를 여러번 가져오게 될 수 있습니다. URL을 기준으로 중복을 제거하는 것도 시도해 보았지만 상위 route의 데이터의 일부분이 하위 route와 겹치는 경우는 알기 힘듭니다. 한동안 [GraphQL과 Relay](http://blog.sapzil.org/2015/10/07/thinking-in-graphql/)에 관심을 가졌던 이유도 이런 문제를 해결해주기 때문이었습니다.

한편 Redux는 불필요한 코드가 늘어나는 점이 불만이었습니다. 사이트의 특성상 API에서 가져온 내용을 보여주기만 하고 변경은 거의 일어나지 않는데, 간단한 데이터도 Redux에 저장해야 했습니다. 물론 Redux에 잘 저장하면 캐싱도 되고 장점이 많지만 복잡도에 비해 이득이 크지 않다고 판단이 되었습니다. 또한 Redux에 데이터를 넣는 코드는 route에 있는데, route와 Redux state의 구조가 다르므로 Redux에서 데이터를 꺼내는 코드를 한 벌 더 작성하는 것도 귀찮았습니다.


## 다 마음에 안드니까 내가 만들자

앞에서 언급한 문제를 해결하는 최대한 단순한 구조가 어떤 것일지 고민하다가 [Nuri](https://github.com/dittos/nuri)라는 라이브러리를 직접 개발하게 되었습니다.

먼저 React Router의 계층 구조에서 오는 문제는 단일 계층만을 사용하는 (무식한) 방법으로 해결했습니다. 그렇게 되니 굳이 React Router를 사용할 이유가 별로 없어졌고 몇 개의 라이브러리를 조합하여 간단한 라우팅을 구현했습니다. (Reddit 모바일 사이트에서 사용하는 [node-horse](https://github.com/reddit/node-horse) 라이브러리에서 아이디어를 많이 얻었습니다.)

또한 각 route마다 별도의 데이터 저장 공간을 두어, route가 불러온 데이터를 React 컴포넌트에서 바로 접근할 수 있도록 했습니다.


## Nuri 맛보기

### 라우팅

라우팅 설정 방식은 [Express](http://expressjs.com/) 같은 서버용 라이브러리와 비슷합니다.

먼저 `App` 객체를 만듭니다.

```js
import {createApp} from 'nuri';

var app = createApp();
```

`App`에는 특정 URL 패턴을 처리할 `RouteHandler`를 등록할 수 있습니다. 핸들러에서 중요한 속성은 `load`와 `component`입니다.

```js
app.route('/posts/:id', {
  load: (request) => {
    return fetch('http://api.example.com/posts/' + request.params.id);
  },
  component: Post
});
```

`load` 함수는 요청을 받아서 필요한 데이터를 가져오는 Promise를 리턴합니다. 데이터를 모두 가져오면 `component`에 지정한 React 컴포넌트가 렌더링됩니다. 가져온 데이터는 `data` prop으로 접근할 수 있습니다.

이렇게 작성한 애플리케이션은 클라이언트에서는 `nuri/client` 모듈을 이용해서 실행할 수 있고, 서버에서는 `nuri/server` 모듈로 미리 렌더링할 수 있습니다.

### 상태 관리

Nuri에는 간단한 상태 관리 시스템이 내장되어 있어서 Redux/Flux 스토어를 사용하지 않아도 됩니다.

컴포넌트에 제공되는 `writeData` 함수로 `data` prop을 변경하고 컴포넌트가 다시 렌더링되게 할 수 있습니다.

```jsx
class Posts extends React.Component {
  render() {
    return <ul>
      {this.props.data.posts.map(post => <li>{post.title}</li>)}
      <li><button onClick={this._addPost.bind(this)}>Add Post</button></li>
    </ul>
  },

  _addPost() {
    this.props.writeData(data => {
      // You can *mutate* the data
      data.posts.push({ title: new Date().toString() });
    });
    // The component is re-rendered with the changed data.
  }
}
```

또한 라우팅과 상태 관리가 연계되어, 각 페이지의 상태가 브라우저 히스토리에 대응합니다. 어떤 페이지의 상태를 변경한 뒤 다른 페이지에 갔다가 브라우저의 뒤로 가기를 누르면 별도의 네트워크 로딩 없이 이전에 변경한 데이터가 바로 보이게 됩니다.


## 앞으로 남은 과제

* 성능 개선: Node.js의 싱글 스레드 모델 특성상 CPU를 점유하는 렌더링 중에는 다른 요청을 처리할 수 없습니다. 보통 수십 밀리초 정도 걸리기 때문에 크게 걱정할 일은 아니지만 작업량을 좀 더 공평하게 분배할 수 있는 방법을 찾아야 합니다. (현재 개발되고 있는 [React의 Fiber reconciler](https://github.com/acdlite/react-fiber-architecture)가 렌더링 작업을 쪼개서 스케줄링할 수 있다고 하는데 기대가 됩니다.)
* 데이터 재사용: React Router의 계층 구조에서는 페이지의 상위 route가 일치하면 하위 route의 데이터만 가져오는 것이 가능했습니다. 현재 구조에서는 따로 캐시도 없고 이전 페이지의 데이터를 재사용할 방법이 없는데, 어떻게 할 수 있을지 고민하고 있습니다.
* 서버 코드 라이브러리화: `nuri/server` 모듈에는 아직 렌더링에 관련된 코드만 있고 실제 서버는 직접 구현해야 합니다. Express 미들웨어를 라이브러리로 만들어서 `App`만 넘기면 되도록 하고 싶습니다.
* 개발 환경 개선: 지금은 코드가 바뀌면 클라이언트 쪽 코드만 자동으로 빌드되고, 서버 코드는 재시작해야 반영이 됩니다.
* Nuri를 npm에 올리기: 조금 더 안정화가 되면 올려보려고 생각 중입니다.
