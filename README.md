### Jest 실습

- 초기 설정
    ~~~
    # project folder로 이동
    $ cd /프로젝트
    
    # node.js 프로젝트 기본설정 파일 생성 - package.json
    $ npm init -y
    
    # 개발모드로 설치하는 이유 : 테스트 관련 프로젝트들은 배포시에는 사용하지 않기 때문
    $ npm i jest -D
    
    # 소스폴더 생성
    $ mkdir src
    
    # git version 관리 제외목록 설정추가
    $ touch .gitignore
       # node_modules 추가
  
    # package.json 파일에 "type": "module" 추가
    ~~~

- 소스파일, 테스트파일 생성
  1. 방식1
     - src/파일명.js 생성 후 소스코드 작성
     - src/파일명.spec.js 생성 후 테스트코드 작성
  2. 방식2
     - src/파일명.js 생성 후 소스코드 작성
     - test 폴더 생성 후 test/파일명.spec.js 생성 후 테스트코드 작성


- windows에서 리눅스 환경설정 명령어 실행을 위한 cross-env 패키지 설치
  ~~~
  $ npm i -D cross-env
  ~~~ 

- 테스트 코드 실행
  ~~~
  $ npx cross-env NODE_OPTIONS="$NODE_OPTIONS --experimental-vm-modules" jest
  ~~~