---
layout: post
title: RxJS로 React 컴포넌트 상태 관리하기
tags: [rxjs, react, javascript, web, reactive]
---

최근 UI 프로그래밍에 Rx 패턴이 많이 쓰이고 있습니다. React는 Rx와 이름은 비슷하지만 상태를 다루는 방식은 명령형에 가깝습니다. [상태를 최소화하고 최대한 바깥으로 밀어내는 식](https://facebook.github.io/react/docs/lifting-state-up.html)으로 문제를 회피할 수는 있지만, 실제 애플리케이션에서는 어찌되었든 상태를 직접 다뤄야 하는 상황이 오곤 합니다.

그렇다면 React 컴포넌트에서도 Rx를 활용하여 상태를 관리할 수 있지 않을까 생각해서 한번 시도해 보았습니다. React에 익숙하다는 가정을 하고 설명하겠습니다. (Rx에 대해 잘 모르신다면 다른 글을 몇 개 읽어보고 오시면 좋습니다)

## RxJS 설치하기

(이 글은 얼마 전 정식 버전이 나온 [RxJS 5](http://reactivex.io/rxjs/)를 기준으로 작성되었습니다.)

npm의 [rxjs](https://www.npmjs.com/package/rxjs) 패키지를 설치하면 됩니다. (`rx`라는 패키지도 있는데 이쪽은 RxJS 구버전이므로 주의가 필요합니다.)

## DOM 이벤트를 Observable로 표현하기

RxJS에는 DOM 노드의 이벤트를 직접 구독할 수 있는 기능이 제공되지만 여기서는 직접 React의 이벤트를 Observable로 바꿔보겠습니다.

[Subject](http://reactivex.io/rxjs/class/es6/Subject.js~Subject.html)를 만들고 입력 내용이 바뀔 때마다 `next` 메소드를 호출하여 Observer에 보냅니다.

Subject는 Observable이기도 하므로 구독해서 state를 업데이트 해봅니다. 여기까지는 기본적으로 EventEmitter와 다를 것이 없습니다.

```js
import * as Rx from 'rxjs';

class EventsExample extends React.Component {
    constructor() {
        super();
        this.state = { text: '' };
        this.text$ = new Rx.Subject();
    }

    render() {
        return (
            <div>
                <input onChange={e => this.text$.next(e.target.value)} />
                {this.state.text}
            </div>
        );
    }

    componentDidMount() {
        this.text$.subscribe(text => this.setState({ text }));
    }
}
```

이벤트를 바로 구독하는 대신 중간에 연산자를 넣어 보겠습니다. [filter](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-filter)로 길이가 2글자 이상일 때만 이벤트를 발생시키고, [map](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-map)으로 뒤에 문자열을 덧붙입니다.

이렇게 함수형 연산자를 통해 이벤트 스트림을 원하는 형태로 변형할 수 있는 것이 Rx의 장점입니다. `map`, `filter` 외에도 여러가지 강력한 연산자를 사용할 수 있습니다.

```js
class EventsExample extends React.Component {
    // ...

    componentDidMount() {
        this.text$
            .filter(text => text.length >= 2)
            .map(text => text + '!')
            .subscribe(text => this.setState({ text }));
    }
}
```

## `props`에 따라 네트워크 요청을 하는 컴포넌트

여기서부터는 검색어를 props로 받아서 GitHub API를 호출하고 받아온 데이터를 렌더링하는 컴포넌트를 만들어 보겠습니다.

네트워크 요청은 비동기 작업이기 때문에 여러가지 복잡한 상황을 처리해야 할 수 있습니다.

* 응답을 받기 전에 다른 검색어가 props로 들어오면 새로운 요청을 보내야 합니다.
* 이전 요청의 응답이 새 요청의 응답보다 늦게 도착하면 무시해야 합니다. (또는, 새 요청을 보내면서 이전 요청을 취소합니다.)
* 요청이 실패하면 다시 요청을 보내봅니다.
* 재시도 중에도 다른 검색어가 props로 들어오면 재시도를 중단합니다.

이런 경우에 Rx를 이용하면 깔끔한 코드를 작성할 수 있습니다.

## `props`를 Observable로 표현하기

먼저 검색어가 props에서 들어오므로 이를 Observable로 만들 것입니다.

위에서와 마찬가지로 Subject를 사용하여 `componentWillReceiveProps` 라이프사이클 메소드가 불릴 때마다 새 props를 전파합니다. 초기값을 나타내기 위해 [BehaviorSubject](http://reactivex.io/rxjs/class/es6/BehaviorSubject.js~BehaviorSubject.html)를 사용했습니다.

그리고 `map` 연산자로 `props`에서 `query` 프로퍼티만을 취했습니다.

```js
class SearchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
        this.props$ = new Rx.BehaviorSubject(props);
    }

    componentWillReceiveProps(nextProps) {
        this.props$.next(nextProps);
    }

    componentWillUnmount() {
        this.props$.complete();
    }

    render() {
        const data = this.state.data;
        return <ul>{data && data.map(item => <li>{item.login}</li>)}</ul>;
    }

    componentDidMount() {
        const query$ = this.props$.map(props => props.query);
        query$.subscribe(query => console.log(query));
    }
}
```

## GitHub API 호출

RxJS의 AjaxObservable로 GitHub API를 호출해보겠습니다. RxJS 5가 나온지 아직 얼마 되지 않아서 문서화가 제대로 되어있지 않은데 다음과 같이 사용합니다.

```js
// 주의: subscribe를 할 때마다 요청을 전송함
Rx.Observable.ajax.get('https://api.github.com/search/users?q=dittos')
    .map(r => r.response.items)
    .subscribe(data => console.log(data));
```

이제 `query`가 바뀔 때마다 요청을 보내려면 각 `query`를 [mergeMap](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap)하여 AjaxObservable로 바꿔줍니다. (`flatMap`으로 불리기도 하는 연산자입니다.)

```js
class SearchExample extends React.Component {
    // ...

    componentDidMount() {
        const query$ = this.props$.map(props => props.query);
        const result$ = query$.mergeMap(query => {
            if (query === '')
                return Rx.Observable.of(null);
            else
                return Rx.Observable.ajax.get('https://api.github.com/search/users?q=' + query)
                    .map(r => r.response.items);
        });
        result$.subscribe(data => this.setState({ data }));
    }
}
```

## 연산자를 붙여서 잘(?) 처리하기

위에서 나열한 요구사항을 만족하기 위해 Rx 연산자를 추가해보겠습니다.

* **이전 요청의 응답이 새 요청의 응답보다 늦게 도착하면 무시해야 합니다**
  `mergeMap`은 요청이 들어간 순서를 따지지 않고 응답이 도착하는 대로 뿜어냅니다. `switchMap`으로 변경해서 이전 요청을 취소하도록 만들 수 있습니다. (`switchMap`은 `flatMapLatest`로 불리기도 합니다.)
* **요청이 실패하면 다시 요청을 보내봅니다**
  `retry`를 적용하면 Observable이 실패 상태로 끝났을 때 다시 Observable을 구독할 수 있습니다.
* **재시도 중에도 다른 검색어가 props로 들어오면 재시도를 중단합니다.**
  이미 `switchMap`으로 변경했으므로 자동으로 재시도가 중단됩니다. :)

```js
class SearchExample extends React.Component {
    // ...

    componentDidMount() {
        const query$ = this.props$.map(props => props.query);
        const result$ = query$.switchMap(query => {
            if (query === '')
                return Rx.Observable.of(null);
            else
                return Rx.Observable.ajax.get('https://api.github.com/search/users?q=' + query)
                    .map(r => r.response.items)
                    .retry(3);
        });
        result$.subscribe(data => this.setState({ data }));
    }
}
```

## 입력창과 합치기

처음의 DOM 이벤트 예제와 결합하여 전체 애플리케이션을 완성합니다.

`text$`에 `debounceTime` 연산자를 적용해서 검색 요청이 너무 빠르게 발생하는 것을 방지합니다.

```js
class EventsExample extends React.Component {
    constructor() {
        super();
        this.state = { text: '' };
        this.text$ = new Rx.Subject();
    }

    render() {
        return (
            <div>
                <input onChange={e => this.text$.next(e.target.value)} />
                <SearchExample query={this.state.text} />
            </div>
        );
    }

    componentDidMount() {
        this.text$.debounceTime(200)
            .subscribe(text => this.setState({ text }));
    }
}
```

[CodePen](http://codepen.io/dittos/pen/QGZewb)에서 실행해보실 수 있습니다.

## 결론

React에서 복잡한 상태를 관리해야 할 때 RxJS를 사용해보는 것도 나쁘지 않을 것 같습니다. 물론 상태를 최소화하는 방법을 먼저 생각해보는 게 중요합니다.

