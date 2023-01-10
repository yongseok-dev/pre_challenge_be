# 1월 챌린지, 함수형 프로그래밍, 실무에서 사용할 수 있나요?

(feat. TypeScript, Nest.js, FxTS)

- 함수형 프로그래밍이 왜 필요한지 이해
- 함수형 프로그래밍과 객체지향이 상반되는 개념이라는 오해
- 취업에 성공해서 백엔드 개발자로서 멋지게 커리어를 시작

## Week 1-1. 함수형 프로그래밍이 뭔데요?

순수 함수, 사이드이펙트, 함수의 조합

- [OT] 강사 소개, 커리큘럼 및 학습 목표 안내
  - 최준(marpple, 3년차)
- 함수형 프로그래밍 컨셉 이해하기

  - `모나드`, `순수함수`, `고차함수`

    - y = f(x) -> output = function(input)

    1. 사이드 이펙트를 제거하자
       - 순수함수의 사용(외부환경에 의해서 변화하지 않는 함수)
       ```
       //bad
           const init = 0;
           const add = (number) =>{
               return number + init;
           }
           add(3)
       //good
           const add = (number, init) =>{
               return number + init;
           }
           add(3,2)
       ```
       - 변화를 만들지 말자
       ```
       //bad
       const fruits = ["사과","바나나","딸기"];
       fruits[2] = "포도"
       //good
       const fruits = ["사과","바나나","딸기"];
       const newFruits = fruits.map((fruit)=>{
           return fruit === "딸기" ? "포도" : fruit;
       })
       ```
    2. 고차함수의 사용

    - 함수가 함수를 인자로 받기도 하고, 함수를 반환하기도 한다.

  - 객체지향, 함수형 프로그래밍 패러다임
    - 패러다임 = 룰 + 마인드셋 + 철학
    1. OOP(196X, Alan Kay): 최초의 OOP는 상속이 없었다.
       - `다형성`
       - Objects -> **messaging**
       - 항상 같은 메시지를 전달하는 것
       - 현실세계 모델링 해보자
    2. FP
       - 인풋과 아웃풋에만 의존
       - 수학적 관점으로 사고하기
  - 실용주의 프로그래밍
    - 새로운 기술의 도입은 새로운 책임
    - 유지보수가 쉽고, 코드 생산성이 높고, 신뢰 가능함
    - 적당히 괜찮으면서도, 변경이 쉬운 소프트웨어
    - 나, 우리, 그리도 팀이 원하는 의사결정

- 고차 함수(map, filter, reduce)를 함께 구현해 보기
  1. map
  ```
      const map = (func, arr) =>{
          const result = []
          for (const el of arr){
              result.push(func(el))
          }
          return result
      }
  ```
  2. filter
  ```
    const filter = (func, arr) =>{
        const result = []
        for (const el of arr){
            if(func(el)){
                result.push(el)
            }
        }
        return result
    }
  ```
  3. reduce
  ```
    const reduce = (func, acc, arr) =>{
        if(arr === undefined){
            arr = acc[Symbol.iterator]
            acc = arr.next().value
        }
        for (const el of arr){
            acc = func(acc, el)
        }
        return acc
    }
  ```
  - iteravle protocol: 순회 가능한 자료형은 해당 프로토콜을 따라야 한다.
    - for...of 문으로 순회 가능
- 함수의 합성 (pipe)
- 커링을 이용해서 로직을 더 간단하게 나타내기
- 지연평가
- SQL Injection Prevention 미들웨어 구현하기
- 알고리즘 문제를 함수형 패러다임으로 해결해 보기
  - 요구사항에 따라서 적절한 함수를 생각하기
  - map: 배열의 각 인수에 콜백함수를 적용해 새로운 배열을 생성
  - filter: 인수로 콜백함수를 받아서 엘리먼트를 함수에 넣어 true -> O, fales -> X 새로운 배열을 생성
  - reduce: 배열을 순회하면서 함수를 적용하고 새로운 결과 값을 얻음
- [아하!모먼트] 만 2년의 경력, 네 번째 회사에 정착한 이야기

## Week 1-2. Nest.js 로 객체지향 이해해 보기

아키텍처, 의존성 주입, 단위 테스트

- Nest.js 공식 문서를 함께 보며 컨셉 이해하기
- Nest.js 로 프로젝트 아키텍처 구성하기
- 실무 함수형 프로그래밍을 위한 빌드업하기
- [아하!모먼트]사이드 프로젝트로 면접의 주도권을 나한테 가져오기

## Week 2-1. 실무 함수형 프로그래밍 1

절차지향, 리팩토링

- 실제 사례와 함께 함수형 패러다임으로 로직을 나타내기
- 절차지향으로 짜여져 있는 코드를 리팩토링하기
- [아하!모먼트] 이력서, 포트폴리오 피드백

## Week 2-2. 실무 함수형 프로그래밍 2

비동기 병렬처리

- 실제 사례와 함께 함수형 패러다임으로 로직을 나타내기
- 급작스럽게 기획이 바뀌었을 때 대응하기
- 비동기 병렬처리 다루기
- [아하!모먼트] Q&A 주니어 개발자가 겪는 고민들에 대한 단상
