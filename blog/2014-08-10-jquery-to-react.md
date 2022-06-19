---
layout: post
title: jQuery to React
tags: [jquery, react, javascript, web]
---

*업데이트: React 0.13에 맞춰 수정했습니다. (2015년 5월 14일)*

[React](http://facebook.github.io/react/)는 Facebook에서 만든 자바스크립트 UI 라이브러리입니다. 간단한 jQuery 코드를 React 앱으로 조금씩 바꿔가면서 React에 대한 이해를 돕는 것이 이 글의 목표입니다. 맛보기 정도로 생각해 주시기 바랍니다. [Step by step from jQuery to Backbone](http://open.bekk.no/from-jquery-to-backbone)에서 아이디어를 차용했습니다.

시작하기에 앞서 예제로 사용할 마크업 및 jQuery 코드를 살펴봅시다.

```html
<body>
    <div class="new-status">
        <h2>New monolog</h2>
        <form action="">
            <textarea></textarea><br>
            <input type="submit" value="Post">
        </form>
    </div>

    <div class="statuses">
        <h2>Monologs</h2>
        <ul></ul>
    </div>

    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script>
    $(document).ready(function() {
        $('.new-status form').submit(function(e) {
            e.preventDefault();

            $.ajax({
                url: '/status',
                type: 'POST',
                dataType: 'json',
                data: { text: $('.new-status').find('textarea').val() },
                success: function(data) {
                    $('.statuses').append('<li>' + data.text + '</li>');
                    $('.new-status').find('textarea').val('');
                }
            });
        });
    });
    </script>
</body>
```

다음과 같은 기능을 구현한 꽤나 평범한 코드입니다.

* 글 내용을 입력할 수 있는 칸이 있습니다.
* 버튼을 누르면 입력한 내용을 서버에 보냅니다.
* 요청이 성공하면 목록에 추가한 글을 덧붙이고 입력창의 내용을 비웁니다.


## 첫 걸음

React 라이브러리 파일을 불러오고, 마크업을 React에서 사용하는 일종의 템플릿 언어인 **JSX** 형식으로 바꿉니다.

```html
<body>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="http://fb.me/react-0.13.3.js"></script>
    <script src="http://fb.me/JSXTransformer-0.13.3.js"></script>
    <script type="text/jsx">
    React.render(
        <div className="app">
            <div className="new-status">
                <h2>New monolog</h2>
                <form action="">
                    <textarea /><br />
                    <input type="submit" value="Post" />
                </form>
            </div>

            <div className="statuses">
                <h2>Monologs</h2>
                <ul></ul>
            </div>
        </div>
    , document.body);

    $(document).ready(function() {
        // 아까 코드 그대로
    });
    </script>
</body>
```

JSX를 사용하면 자바스크립트 코드와 HTML 코드를 섞을 수 있게 됩니다. JSX 코드는 자바스크립트 코드로 변환됩니다. 예를 들어 `<a href="http://example.com/"><b>Link</b></a>`는 `React.createElement('a', {href: "http://example.com/"}, React.createElement('b', null, "Link"))`로 바뀝니다.

React와 함께 포함시킨 JSXTransformer가 이러한 변환 작업을 해줍니다. 자동으로 `type="text/jsx"`인 `<script>` 태그를 찾아서 자바스크립트 코드로 컴파일됩니다.

JSX는 HTML과 비슷하긴 하지만 약간 다릅니다. 다소 헷갈릴 수도 있지만 몇가지 사항만 주의하면 됩니다. 처음의 HTML 마크업과 달라진 부분을 살펴봅시다.

* 한번 열린 태그는 반드시 닫아야 합니다: `<br>`과 `<input>`이 `<br />`, `<input />`으로 바뀌었습니다.
* 일부 속성의 이름이 다릅니다: `class`가 `className`으로 바뀌었습니다. ([전체 목록](http://reactkr.github.io/react/docs/tags-and-attributes-ko-KR.html))
* 최상위 노드가 필요합니다: 따라서 `<div className="app">`으로 한번 감쌌습니다.

`React.render` 함수는 첫번째 인자로 받은 JSX 코드를 두번째 인자의 DOM 노드에 출력해줍니다. 여기서는 `document.body`, 즉 `<body>` 태그에 마크업을 출력했습니다.


## 컴포넌트

React가 제공하는 가장 중요한 기능은 **컴포넌트**입니다. 컴포넌트를 통해 UI 요소를 추상화하고 조립할 수 있게 됩니다. 말로 설명하면 어려우니 코드를 보겠습니다.

```js
var NewStatus = React.createClass({
    render: function() {
        return <div className="new-status">
            <h2>New monolog</h2>
            <form action="">
                <textarea /><br />
                <input type="submit" value="Post" />
            </form>
        </div>;
    }
});

var App = React.createClass({
    render: function() {
        return <div className="app">
            <NewStatus />
            <div className="statuses">
                <h2>Monologs</h2>
                <ul></ul>
            </div>
        </div>;
    }
});

React.render(<App />, document.body);

$(document).ready(function() {
    // 아까 코드 그대로
});
```

앱 전체를 `App` 컴포넌트에 집어넣고, 글 입력 폼을 `NewStatus` 컴포넌트로 분리했습니다. `React.createClass` 함수로 컴포넌트를 선언하고, **render** 메소드에서 JSX 코드를 리턴하는 것을 알 수 있습니다.


## DOM ready 이벤트 없애기

이제는 jQuery를 쓰던 부분을 하나씩 없애보겠습니다. 먼저 `$(document).ready(...)`를 없애볼까요?

```js
var NewStatus = React.createClass({
    render: function() {
        // 아까 코드 그대로
    },
    componentDidMount: function() {
        $('.new-status form').submit(function(e) {
            e.preventDefault();

            $.ajax({
                url: '/status',
                type: 'POST',
                dataType: 'json',
                data: { text: $('.new-status').find('textarea').val() },
                success: function(data) {
                    $('.statuses').append('<li>' + data.text + '</li>');
                    $('.new-status').find('textarea').val('');
                }
            });
        });
    }
});

...

//$(document).ready(function() {
//    ...
//});
```

`NewStatus` 컴포넌트의 **componentDidMount** 메소드로 DOM ready 이벤트 핸들러의 내용을 옮겼습니다. componentDidMount 메소드는 DOM 노드가 실제로 문서에 추가된 이후에 호출되므로, 이전 코드와 같은 동작입니다.


## submit 이벤트 핸들러

JSX에서는 속성에 문자열 대신 JS 표현식을 바로 넣을 수 있습니다. 이를 이용하면 이벤트 핸들러 함수를 `<form>` 태그에 바로 연결할 수 있습니다.

```diff
var NewStatus = React.createClass({
    render: function() {
        return <div className="new-status">
            <h2>New monolog</h2>
-           <form action="">
+           <form action="" onSubmit={this.handleSubmit}>
                <textarea /><br />
                <input type="submit" value="Post" />
            </form>
        </div>;
    },
-   componentDidMount: function() {
-       $('.new-status form').submit(function(e) {
+   handleSubmit: function(e) {
            e.preventDefault();

            $.ajax({
                url: '/status',
                type: 'POST',
                dataType: 'json',
                data: { text: $('.new-status').find('textarea').val() },
                success: function(data) {
                    $('.statuses').append('<li>' + data.text + '</li>');
                    $('.new-status').find('textarea').val('');
                }
            });
-       });
    }
});
```

보시다시피 JS 표현식을 속성으로 넣을 때는 따옴표 대신 중괄호를 사용합니다. 덕분에 componentDidMount가 필요 없어졌네요.


## DOM 쿼리 없애기

JSX 태그에 `ref` 속성을 추가하면 해당 컴포넌트 안에서 그 노드에 바로 접근할 수 있습니다.

```diff
var NewStatus = React.createClass({
    render: function() {
        return <div className="new-status">
            <h2>New monolog</h2>
            <form action="" onSubmit={this.handleSubmit}>
-               <textarea /><br />
+               <textarea ref="text" /><br />
                <input type="submit" value="Post" />
            </form>
        </div>;
    },
    handleSubmit: function(e) {
        e.preventDefault();

+       var $text = $(React.findDOMNode(this.refs.text));
        $.ajax({
            url: '/status',
            type: 'POST',
            dataType: 'json',
-           data: { text: $('.new-status').find('textarea').val() },
+           data: { text: $text.val() },
            success: function(data) {
                $('.statuses').append('<li>' + data.text + '</li>');
-               $('.new-status').find('textarea').val('');
+               $text.val('');
            }
        });
    }
});
```

`React.findDOMNode` 함수는 왜 필요한 것일까요? 사실은 `<textarea>` 같은 JSX 태그도 React 컴포넌트이기 때문입니다. 따라서 컴포넌트가 실제로 사용하는 DOM 노드에 접근하기 위해 별도의 함수를 호출해야 합니다.


## 컴포넌트 간 통신

이제 `$('.statuses')`를 없애야 하는데, ref를 사용하고 싶어도 그것이 다른 컴포넌트에 속해 있어서 쓸 수가 없네요. 어떻게 하면 App 컴포넌트에 접근할 수 있을까요?

```diff
var NewStatus = React.createClass({
    render: function() {
        // 그대로
    },
    handleSubmit: function(e) {
        e.preventDefault();

+       var self = this;
        var $text = $(React.findDOMNode(this.refs.text));
        $.ajax({
            url: '/status',
            type: 'POST',
            dataType: 'json',
            data: { text: $text.val() },
            success: function(data) {
-               $('.statuses').append('<li>' + data.text + '</li>');
+               self.props.onCreate(data);
                $text.val('');
            }
        });
    }
});

var App = React.createClass({
    render: function() {
        return <div className="app">
-           <NewStatus />
+           <NewStatus onCreate={this.handleCreate} />
            <div className="statuses">
                <h2>Monologs</h2>
-               <ul></ul>
+               <ul ref="items"></ul>
            </div>
        </div>;
-   }
+   },
+   handleCreate: function(data) {
+       $(React.findDOMNode(this.refs.items)).append('<li>' + data.text + '</li>');
+   }
});
```

React에서는 자식 컴포넌트가 부모 컴포넌트에 바로 접근할 수 없습니다. 따라서 데이터가 항상 부모에서 자식 방향으로만 전달됩니다. 부모 컴포넌트가 자식 컴포넌트에 데이터를 넘겨줄 때는 **prop**을 사용합니다. JSX 태그의 속성을 모두 `this.props`에서 참조할 수 있습니다.

여기서는 `onCreate`라는 속성으로 `handleCreate` 메소드를 넘겨주었고, NewStatus 컴포넌트에서 `this.props.onCreate`로 접근합니다. (JS에서 this는 스코프를 따르지 않으므로 self라는 변수에 임시로 넣었습니다.)

이제 `handleCreate` 함수가 App 컴포넌트에 속해있으므로 ref를 만들어서 `<ul>` 요소에 접근할 수 있게 되었습니다.


## append 없애기

이제 리스트에 새로운 항목을 추가하는 코드를 React로 대체해보겠습니다. 기존 코드의 또 한가지 문제는 HTML을 한땀한땀 문자열로 만들고 있다는 것입니다. 만약 내용에 HTML이 들어간다면 XSS 취약점이 발생할 겁니다. JSX는 자동으로 HTML escape를 해주는데, 이 코드를 JSX로 바꿀 수는 없을까요?

```diff
var App = React.createClass({
+   getInitialState: function() {
+       return {items: []};
+   },
    render: function() {
        return <div className="app">
            <NewStatus onCreate={this.handleCreate} />
            <div className="statuses">
                <h2>Monologs</h2>
-               <ul ref="items"></ul>
+               <ul>{this.state.items}</ul>
            </div>
        </div>;
    },
    handleCreate: function(data) {
-       $(React.findDOMNode(this.refs.items)).append('<li>' + data.text + '</li>');
+       this.setState({
+           items: this.state.items.concat(<li>{data.text}</li>)
+       });
    }
});
```

React에서는 DOM을 직접 수정하는 API를 제공하지 않습니다. 그 대신 새로운 데이터를 가지고 컴포넌트를 완전히 새로 렌더링할 수는 있습니다. 만약 새로운 항목을 추가하기 전에 있던 기존 항목들을 모두 저장하고 있다면, 새로 렌더링할 때 그 데이터를 다시 사용할 수 있을 겁니다.

위의 코드에서는 기존 항목을 기억하기 위해 **state**를 사용했습니다. `getInitialState`에서 초기값을 설정할 수 있고, 다른 메소드에서는 `this.state`에 접근하여 값을 읽을 수 있습니다. 또한, `setState` 메소드로 값을 수정하면 컴포넌트가 다시 렌더링됩니다.

또 한 가지 새로운 개념은 자바스크립트 표현식을 JSX 태그의 내용에 집어넣은 것입니다. 문자열이나 배열, 또는 JSX 코드를 중괄호로 감싸 넣으면 그 자리에 들어갑니다.

`state`가 바뀔 때마다 매번 렌더링을 하면 느려지지 않을까요? 물론 직접 DOM을 수정하는 것만큼 빠르지는 않겠지만, React가 기존에 렌더링 된 내용과 새로 렌더링 될 내용을 비교하여 바뀐 부분만 렌더링하기 때문에 상당히 빠릅니다. 또한 차이점만 반영되기 때문에, App 컴포넌트가 새로 렌더링 되어도 NewStatus 컴포넌트에 들어있는 `<textarea>`의 내용이나 선택 상태가 사라지지 않고 유지됩니다.


## 데이터와 표현 분리

지금은 `this.state.items`에 JSX 코드를 바로 집어넣었지만, 이렇게 하면 나중에 다른 마크업을 사용하고 싶을 때 문제가 생길 것입니다. 예를 들어 마지막으로 추가된 항목만 다른 스타일로 보여주고 싶다면 어떻게 해야 할까요.

따라서 state에는 순수한 데이터만 넣고, JSX는 모두 render 메소드 안에서 생성하도록 수정합시다.

```diff
var App = React.createClass({
    getInitialState: function() {
        return {items: []};
    },
    render: function() {
        return <div className="app">
            <NewStatus onCreate={this.handleCreate} />
            <div className="statuses">
                <h2>Monologs</h2>
-               <ul>{this.state.items}</ul>
+               <ul>{this.state.items.map(function(item) {
+                   return <li>{item.text}</li>;
+               })}</ul>
            </div>
        </div>;
    },
    handleCreate: function(data) {
        this.setState({
-           items: this.state.items.concat(<li>{data.text}</li>)
+           items: this.state.items.concat(data)
        });
    }
});
```


## 최종 코드

아직 jQuery를 사용하는 부분이 조금 남아있기는 하지만 거의 대부분의 코드를 React로 전환했습니다.

<script src="https://gist.github.com/dittos/ce26fdf91c7855ebd07f.js"></script>


## 더 알아보기

설명을 위해 단순한 예제를 사용했기 때문에 React 코드가 원래 코드보다 어려워 보일 수도 있습니다. 그러나 조금 더 복잡한 애플리케이션을 만든다면 React를 사용할 때 훨씬 관리하기 쉬운 코드를 작성할 수 있습니다.

또한 다양한 개념을 다루려고 굳이 거쳐갈 필요 없는 과정을 일부러 넣거나 복잡한 설명을 생략한 부분이 있습니다. React를 제대로 공부하시려면 [공식 사이트의 문서](http://facebook.github.io/react/docs/getting-started.html)를 읽으시길 바랍니다.

2015-05-14 추가: React 한국 커뮤니티에서 번역한 [한국어 문서](http://reactkr.github.io/react/docs/getting-started-ko-KR.html)도 있습니다.

