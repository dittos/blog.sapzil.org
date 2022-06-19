---
layout: post
title: "Diff Monster를 소개합니다"
description: "Diff Monster는 GitHub 풀 리퀘스트 리뷰를 조금 편하게 해주는 웹 기반 도구입니다."
image: "public/img/2017-07-diffmonster.png"
tags: [github, code-review, tools, announcement]
---

TL;DR: Diff Monster는 GitHub 풀 리퀘스트 리뷰를 조금 편하게 해주는 웹 기반 도구입니다.

아래 글을 읽기 싫다면 [지금 바로 접속](https://diff.sapzil.org/)해보세요.

<figure>
<a href="/public/img/2017-07-diffmonster.png"><img src="/public/img/2017-07-diffmonster.png" alt="스크린샷" /></a>
</figure>

## 어쩌다 이런 걸 만들게 되었나요

- 기: 연초부터 회사에서 Bitbucket Server를 그만 쓰고 GitHub로 옮기게 되었습니다. 다른건 다 좋은데 코드 리뷰 인터페이스가 너무 불편했습니다.
- 승: 5월에 긴 연휴가 있어서 한번 코드 리뷰 툴을 만들어보자는 무모한 계획을 세웠습니다.
- 전: 당연히 연휴 중에 완성 못했고, GitHub API에서 되는게 별로 없어서 꾸역꾸역 개발했습니다.
- 결: 뭔가 간신히 나오긴 했습니다.

## 무슨 기능이 있나요

### 파일 트리

변경된 파일을 디렉토리 계층 구조로 묶어서 볼 수 있습니다.

<figure>
<img src="/public/img/2017-07-diffmonster-filetree.png" width="393" alt="파일 트리" />
</figure>

파일명으로 퍼지 검색이 가능합니다.

<figure>
<img src="/public/img/2017-07-diffmonster-fuzzy.png" width="343" alt="퍼지 검색" />
<figcaption><code>RIC</code>를 입력하면 <strong>R</strong>eal<strong>I</strong>nterceptor<strong>C</strong>hain.java를 찾아줍니다.</figcaption>
</figure>

**GitHub와 비교**: GitHub는 파일 목록이 항상 펼쳐져 있지 않아서 파일 사이를 이동할 때 불편합니다. 심지어 목록을 펼칠 때마다 맨 위부터 다시 파일을 찾아야 합니다. 그리고 그냥 목록으로 나열되어 있어서 보기가 힘듭니다.

### 파일마다 리뷰 완료 기록

파일마다 리뷰 완료 여부를 표시할 수 있습니다. 큰 PR을 볼 때도 리뷰를 어디까지 했는지 쉽게 알 수 있습니다. (일단 작동은 하지만 좀 더 개선의 여지는 있습니다. 단축키를 추가한다거나.)

![파일마다 리뷰 완료 기록](/public/img/2017-07-diffmonster-file-progress.png)

**GitHub와 비교**: GitHub엔 없는 기능!

### 리뷰 댓글 작성

GitHub에서 제공하는 기능 중 기본적인 것은 대부분 구현했습니다. 모아서 한번에 올리기도 됩니다. (작성한 댓글은 GitHub에 저장됩니다.)

<figure>
<img src="/public/img/2017-07-diffmonster-comment.png" width="475" alt="Commented via Diff Monster" />
<figcaption>댓글을 달 때 마지막에 작은 서명이 붙으니 놀라지 마세요. :)</figcaption>
</figure>

**GitHub와 비교**: 아직 댓글 수정, 답글 달기, 리뷰 취소는 지원하지 않습니다.

### 승인하기

한번 클릭으로 풀 리퀘스트를 승인(approve)할 수 있습니다.

<figure>
<img src="/public/img/2017-07-diffmonster-approve.png" width="115" alt="원 클릭" />
</figure>

**GitHub와 비교**: GitHub에서는 Review changes 클릭 - Approve에 체크 - Submit review 클릭의 세 단계를 거쳐야 합니다. 물론 리뷰 요약을 작성할 수 있도록 이렇게 했겠지만 Approve할 때 사족을 다는 경우는 별로 없다고 생각합니다.

<figure>
<img src="/public/img/2017-07-diffmonster-gh-approve.png" width="411" alt="3단계" />
<figcaption>GitHub은 세 번 클릭해야 한다.</figcaption>
</figure>

### 인박스

리뷰해야 할 풀 리퀘스트를 한 곳에서 볼 수 있습니다. 오른쪽 위의 상자 아이콘을 누르면 나옵니다. (로그인 필요)

<figure>
<img src="/public/img/2017-07-diffmonster-inbox.png" width="584" alt="인박스" />
</figure>

**GitHub와 비교**: GitHub에도 풀 리퀘스트 모아보기 페이지가 있긴 합니다. 근데 리뷰 댓글을 하나라도 달면 거기서 풀 리퀘스트가 사라져 버립니다. (왜 그랬을까?) Diff Monster에서는 Reviewing 탭에 계속 나와요.

## 앞으로의 계획

처음에 계획했던 기능은 대부분 구현했는데 아직 GitHub에서 제공하는 모든 기능이 되지는 않아서 보충이 필요합니다. 그리고 UI에 자잘하게 개선해야 할 부분이 많이 있습니다.

저희 회사에서 몇몇 분들이 써보시긴 했지만 다른 팀의 워크플로우에는 잘 맞지 않을 수도 있어서 그런 부분도 피드백을 받아 보완해보고 싶은 생각입니다. (물론 이대로 방치될 가능성이 상당히 높습니다 ㅋㅋㅋㅋㅋ)

## 링크

- [Diff Monster](https://diff.sapzil.org/)
- [프로젝트 저장소](https://github.com/dittos/diffmonster) (코드는 GPLv3 라이선스로 공개)
