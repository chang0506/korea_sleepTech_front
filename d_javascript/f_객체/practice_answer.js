let person = {
  name: '전창현',
  age: 27,
  isStudent: true
};

let fruits = ['Apple', 'Banana', 'Grape'];
console.log(fruits[1]);

function add(a, b) {
  return a + b;
}

console.log('=== 문제 2 ===');

let length = person.length
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

let array = [1, 2, 3, 4, 5];
for (let num in array) {
  console.log(array[num]);
  
}

let newFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(newFruits);

// cf) 배열 메서드의 콜백함수는 주로 화살표 함수 형태 사용

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
function combineArrays(arr1, arr2) {
  // arr1을 전체 순회: 각 요소의 값과 그 요소의 인덱스 번호 추출
  // >> 인덱스 번호값을 통해 동일한 인덱스의 arr2 값을 추출
  let result = arr1.map((element, index) => element + arr2[index]);
  return result;
}

console.log(combineArrays(arr1, arr2));

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

let personCopy = deepCopy(person);
personCopy = '문창배';
console.log(person);

const user = [
  {name: "John", age: 25},
  {name: "Jane", age: 17},
  {name: "Doe", age: 18},
]

function adultUserNames(users) {
  return users
    .filter(user => user.age >= 18)
    .map(user => user.name);
}

console.log(adultUserNames(user));


