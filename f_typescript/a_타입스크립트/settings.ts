/*
# 타입스크립트 환경 설정

! 1. Node.js 설치
: JavaScript의 '런타임(JS의 프로그램을 실행할 수 있는 환경)'
- TS는 JS의 슈퍼셋이기 때문에 'Node.js'환경에서 동작

? Node.js 설치 전 삭제

! 2. npm
: NPM(Node Package Manager)은 Node.js의 기본 패키지 관리 도구
- NPM을 사용하여 JS의 라이브러리를 쉽게 설치하고 관리
- 프로젝트의 의존성 관리 & 스크립트 실행 기능을 제공

? cf) Node 설치 시 NPM 자동 설치
  : 설치 확인 명령어
  : npm -v


? npm 기본 명령어
  1. npm init
    : 새로운 Node.js 프로젝트 시작
    - 기본값으로 package.json 파일 생성
    - 'y옵션 추가' (npm init -y)
      : 질문없이 기본값으로 package.json 파일 생성
  
  2. npm install
    : package.json 파일에 명시된 모든 "의존성"을 설치
    - 특정 패키지 설치 방법
      : npm install 패키지명
    - '-D | --save-dev 옵션 추가'
      : 개발 의존성으로 패키지를 추가
    
  3. npm uninstall
    :모든 "의존성" 패키지 제거
    - 특정 패키지 제거 방법
      : npm uninstall 패키지명
*/