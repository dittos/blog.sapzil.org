---
layout: post
title: "uWSGI의 고급 기능들"
tags: [python, sysadmin, web]
---

그동안은 파이썬 애플리케이션을 배포할 때 설정이 쉽다는 이유로 [gunicorn](http://gunicorn.org/)을 주로 사용했다. ([예전에 올린 관련 글](http://dittos.github.io/2014/09/21/python-web-app-deploy/)) 이번에 우연히 [uWSGI](http://uwsgi-docs.readthedocs.org/)의 여러가지 기능에 대해 알게 되었는데, 호기심이 생겨 문서를 읽으면서 이것저것 적용해보았다. [공식 문서](http://uwsgi-docs.readthedocs.org/)가 잘 쓰여있긴 하지만 워낙 기능이 방대해서 유용할만한 기능을 정리해본다.

혹시 uWSGI의 기본적인 설정 방법을 알고 싶다면 [haruair님의 블로그 글](http://haruair.com/blog/1900)을 추천한다.


## 설정 파일 변수 (placeholder)

이걸 고급 기능이라고 해야할 지 의문이지만... 설정 파일 안에서 반복되는 내용은 변수로 두고 한번에 치환할 수 있다.

```
# %(app_dir) -> /path/to/app
set-placeholder = app_dir=/path/to/app

# virtualenv = /path/to/app/env와 동일
virtualenv = %(app_dir)/env
```


## 부속 프로세스 관리

메인 웹 애플리케이션과 항상 같이 실행되는 부속 데몬/워커 프로세스가 있는 경우가 많다. 예를 들면 Celery 워커가 있다. 이런 프로세스들을 따로 시스템 서비스로 등록하지 않고 uWSGI가 관리하게 만들 수 있다. `attach-daemon` 옵션에 함께 실행할 명령을 지정하면 된다. 단, 이때 실행되는 명령어는 데몬화(daemonize)되면 안되고 foreground 모드로 실행되어야 한다.

```
attach-daemon = /path/to/worker/script
```

마스터 프로세스가 종료(리로드)되면 부속 프로세스도 함께 종료된다는 것에 주의해야 한다. 이것을 방지하려면 `smart-attach-daemon` 옵션을 사용해서 PID 파일 경로를 지정해 주어야 한다. 자세한 것은 [문서](http://uwsgi-docs.readthedocs.org/en/latest/AttachingDaemons.html)를 보자.


## 정해진 시간에 명령 실행 (cron)

놀랍게도 cron도 uwsgi로 대체할 수 있다. 보통 crontab에 직접 등록해놓으면 애플리케이션 설정과 분리되어 있기 때문에 잊어버리거나 실수하기 쉬운데, uwsgi 설정에 넣으면 상당히 편리할 것이다. `cron` 옵션으로 지정하면 되는데, crontab의 설정과 거의 동일하다. 단, crontab에서 `*/10`처럼 쓰던 것을 `-10`으로 써야 한다. `*`은 `-1`로 쓰면 된다.

```
# crontab: */5 * * * * /path/to/some/script
cron = -5 -1 -1 -1 -1 /path/to/some/script
```

`cron` 대신 `unique-cron` 옵션을 지정하면 정해진 시각이 되어도 이전에 실행되던 프로세스가 있으면 그 프로세스가 끝날때까지 대기해서 항상 하나의 프로세스만 실행된다. 자세한 것은 [문서](http://uwsgi-docs.readthedocs.org/en/latest/Cron.html)에서 더 볼 수 있다.


## 정적 파일 서빙

정적 파일을 uwsgi에서 전송하도록 할 수 있다. nginx에 맡기는 것에 비해 큰 장점이 있지는 않지만 애플리케이션에 대한 정보가 하나의 설정 파일에 들어있게 만들 수 있어서 좋은 것 같다. `static-map` 옵션으로 특정 문자열로 시작하는 경로를 가진 요청을 파일시스템 상의 특정 디렉토리에 매핑할 수 있다. 그리고 `static-expires`로 특정 패턴의 주소에 `Expires` 헤더를 설정할 수 있다. ([자세한 설명](http://uwsgi-docs.readthedocs.org/en/latest/StaticFiles.html))

```
# /static/a.jpg -> /path/to/static/a.jpg
static-map = /static=/path/to/static
# /static/build/로 시작하는 요청의 만료일을 요청 시각으로부터 2592000초 이후로 설정
static-expires-uri = /static/build/* 2592000
```


## 접속자가 없을 때 프로세스 종료 (cheap 모드)

어드민 툴 같은 서비스는 아주 자주 사용하지는 않기 때문에 항상 켜두면 메모리가 낭비된다. `cheap`과 `idle` 옵션을 사용하면 접속자가 일정 시간동안 없으면 프로세스를 종료해서 시스템 자원을 절약할 수 있다.

먼저 [cheap 옵션](http://uwsgi-docs.readthedocs.org/en/latest/Options.html#cheap)은 첫번째 요청이 들어올 때까지 worker 프로세스를 실행하지 않도록 해준다. (master 프로세스는 항상 실행되어 있다) 또한 [idle 옵션](http://uwsgi-docs.readthedocs.org/en/latest/Options.html#idle)에 지정한 시간동안 아무런 접속이 없으면 프로세스가 cheap 모드로 들어간다.

```
# cheap 모드로 실행, 60초 동안 요청이 없으면 cheap 모드로 전환
cheap = true
idle = 60
```


## Graceful reload

기능이라기보다는 작동 방식에 대한 설명인데, uWSGI는 Gunicorn과 리로드 동작 방식이 다르다. 먼저 uWSGI는 `master` 모드로 실행해야 graceful reload가 가능하다. 또한 Gunicorn은 HUP 시그널을 받으면 기존 프로세스는 그대로 둔 채 먼저 새로운 워커 프로세스를 실행하고 이전 워커를 하나씩 종료하는 방식인데 반해, uWSGI는 먼저 워커 프로세스를 모두 종료한 뒤 새로운 워커를 실행하는 방식이다. 따라서 uWSGI에서는 리로드되는 동안 들어오는 요청은 처리가 지연될 수 있다. (단, Gunicorn과 달리 리로드 되는 동안에도 메모리 사용량이 증가하지 않는다.)

다른 리로드 방식도 있으니 궁금하다면 [문서](http://uwsgi-docs.readthedocs.org/en/latest/articles/TheArtOfGracefulReloading.html)를 읽어보자.


## Emperor 모드: 여러 앱 관리

uWSGI 프로세스 자체를 관리하려면 upstart나 systemd 설정을 작성해서 시스템 서비스로 등록하는 것이 일반적이다. [Emperor 모드](http://uwsgi-docs.readthedocs.org/en/latest/Emperor.html)를 사용하여 init 데몬과 별도로 uWSGI 프로세스를 관리할 수 있다. 가장 큰 장점은 배포판에서 사용하는 init 데몬의 종류에 상관 없이 서비스를 관리할 수 있다는 점일 듯 하다. 그리고 프로세스의 실행을 특정 포트에 접속하는 클라이언트가 나타날 때까지 지연하는 [Socket Activation](http://uwsgi-docs.readthedocs.org/en/latest/Changelog-1.9.1.html#on-demand-vassals) 기능을 사용할 수 있다. (물론 systemd에서도 가능하지만...)

먼저 설치는, 우분투 기준으로 [uwsgi-emperor](http://packages.ubuntu.com/vivid/uwsgi-emperor) 패키지를 설치하면 된다. (구버전 우분투에서는 [PPA 저장소](https://launchpad.net/~chris-lea/+archive/ubuntu/uwsgi)를 사용하여 최신 버전을 설치할 수 있다.) 패키지를 설치하면 자동으로 emperor 프로세스가 실행된다. 설정 파일은 `/etc/uwsgi-emperor/emperor.ini`에 있다.

설정 파일에서 특별히 건드릴 부분은 없고, 마지막에 보면 `emperor` 옵션이 있을 것이다. 이 옵션에 지정된 디렉토리에 uWSGI 설정 파일을 새로 추가하면 그 설정대로 프로세스가 실행된다. (이때 관리되는 자식 프로세스를 vassal이라고 한다. 황제(emperor)와 신하(vassal)!) 설정 파일이 수정되거나 수정 시각이 변경(`touch`)되면 프로세스가 리로드된다. 디렉토리에서 설정 파일이 삭제되면 서비스가 종료된다. 물론 여러개의 디렉토리를 모니터링하게 할 수도 있으므로 나는 홈 디렉토리 밑의 설정 파일 디렉토리를 추가했다.

```
...
# vassals directory
emperor = /etc/uwsgi-emperor/vassals
emperor = /home/ditto/uwsgi-services
```