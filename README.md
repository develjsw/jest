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
     - src/파일명.ts 생성 후 소스코드 작성
     - src/파일명.spec.ts 생성 후 테스트코드 작성
  2. 방식2
     - src/파일명.ts 생성 후 소스코드 작성
     - test 폴더 생성 후 test/파일명.spec.ts 생성 후 테스트코드 작성


- typescript 소스코드를 jest로 실행하기 위한 패키지 설치
  ~~~
  $ npm i ts-jest @types/jest
  ~~~
  
- jest용 typescript 설정파일 생성
  ~~~
  $ npx ts-jest config:init
  ~~~

- 테스트 코드 실행
  ~~~
  $ npx jest
  ~~~