---
layout: post
title: "Windows 10 Home에 Docker Desktop 설치하기"
tags: [docker, windows]
---

[Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)를 설치하려면 Hyper-V를 지원하는 OS가 필요합니다. Home은 여기에 포함되지 않으므로, VirtualBox 기반의 레거시 [Docker Toolbox](https://docs.docker.com/toolbox/overview/)를 사용하라고 친절하게 나와있습니다. 하지만 저는 최신 버전을 쓰고 싶었기에 방법이 없을까 찾아보던 중 [Docker 포럼의 한 글](https://forums.docker.com/t/installing-docker-on-windows-10-home/11722/25)을 발견했습니다. 따라해보니까 잘 되어서 정리해 둡니다. (어쩌면 윈도우 라이센스 위반일 수도 있지만...)

## 1단계: Hyper-V 설치

다음 스크립트를 `.bat` 확장자의 파일로 저장한 다음 관리자 권한으로 실행합니다.

```bat
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del hyper-v.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V -All /LimitAccess /ALL
pause
```

약간의 시간이 지나면 설치가 완료되고 재부팅 하라고 나옵니다. 재부팅을 합시다.

## 2단계: Docker 인스톨러의 윈도우 에디션 체크 우회

Hyper-V를 켜도 Docker 인스톨러가 지원하는 윈도우 버전인지 확인하기 때문에 우회가 필요합니다.

레지스트리 편집기(`regedit`)을 켜고 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion`에 가서 `EditionID`을 `Professional`로 변경합니다.

이제 인스톨러를 실행하면 설치가 잘 될 것입니다. **설치가 끝난 다음 해당 레지스트리 값을 원래대로 돌려놓으세요!**

## 3단계: 설치가 잘 되었는지 확인

Docker Desktop을 실행하고, 명령 프롬프트에서 다음 명령을 입력해서 잘 되는지 확인해 봅니다.

```
docker run hello-world
```
