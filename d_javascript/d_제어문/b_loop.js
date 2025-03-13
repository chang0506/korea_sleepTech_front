//# == 자바스크립트 '반복문' == //
// : 동일한 코드블록을 여러 번 실행하는 제어문
// - for, while, do-while (for...in 반복문, for...of 반복문)

// cf) 자바스크립트 배열 선언
//    : 변수종류 변수명 = [요소1, 요소2, 요소3 ...];

let fruits = ['apple', 'banana', 'mango'];
let numbers = [1, 2, 3, 4, 5];
let bools = [true, false];

// JS 배열에는 요소의 모든 타입이 동시에 삽입 가능
let js = [1, '자바스크립트', true, null, undefined, [1, 2, 3]];

// 배열 요소 접근: 배열명[인덱스 번호]
// 배열 길이 확인: .length 속성

/*
for (초기화식; 종료조건; 증감식) {
  표현의 결과가 참인 동안에 실행
}
*/
console.log('=== for 반복문 ===');
for (let i = 0; i < 5; i++) {
  console.log(i); 
}

// == 별찍기 ==
/*
*
**
***
****
*****
*/
// 행에 대한 반복: 5번 실행
for (let i = 1; i <= 5; i++) {
  let stars = '';

  // 별의 개수에 대한 반복: 1 ~ 5까지 증가
  for (let j = 0; j < i; j++) {
    // 1행일 때 j = 0
    // 2행일 때 j = 0, 1
    // 3행일 때 j = 0, 1, 2
    // ...
    stars += '*';
  }
  console.log(stars);
}

