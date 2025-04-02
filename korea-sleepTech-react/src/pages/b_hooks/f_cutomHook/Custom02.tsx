import React from "react";
import { useInput } from "./useInput";

function Custom02() {
  // 커스텀 훅을 사용한 input창 상태 관리
  const example1 = useInput("");
  const example2 = useInput("");

  // 구조 분해 할당 사용
  const { 
    //! value 속성을 name이라는 변수에 저장
    value: name, 
    handleReset: nameReset, 
    bind: nameBind 
  } = useInput("");

  const {
    value: email,
    handleReset: emailReset,
    bind: emailBind
  } = useInput('');

  const { value, handleReset, bind } = useInput('');
  console.log(value);
  // useInput 호출시 리턴 객체
  // { value: '', hadleReset: function, bind: { value: '', onChange: fuction }}
  
  //! == 구조 분해 할당 ===
  const person = { nickname: '전창현', age: 27 };
  const { nickname, age } = person;
  console.log(nickname, age);

  
  const { nickname: nn } = person;
  // const nn = person.nickname;
  // : 구조 분해 할당 시 가져오는 데이터의 명칭을 변경 가능
  // EX) const { 실제속성값: 변경할명칭 } = 반환할데이터;
  
  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        {...nameBind}
      />
      <button onClick={nameReset}>이름 초기화</button>
      <p>{email}</p>
      <input
        type="text"
        name="email"
        placeholder="사용자 이메일"
        {...emailBind}
      />
      <button onClick={emailReset}>이메일 초기화</button>
      
    </div>
  );
}

export default Custom02;
