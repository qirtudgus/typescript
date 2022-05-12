import React from 'react';

function Func() {


// 변수에 함수 매개변수, 리턴 타입에 대한 명시적 설정
let assignClass: (n:string) => void;
// 변수에 함수 값 할당
assignClass = function(name) {
  document.documentElement.classList.add(name);
};

// 들어오는 매개변수와 리턴 타입은 당연히 관계없다. 
let funcPrac: (n:string) => number;
funcPrac = function(n) {
    
    let b:number = parseInt(n); 
    return b
}

// 명시적 설정과 함수 값 할당도 동시에 할 수 있다.
let funcPrac2:(n:boolean) => string = function (n) {
    if(n){
        return "good!"
    }
   else{
       return "bad"
   }
}
 // 위 함수를 화살표 함수로 기입할 시
let funcPrac3:(n:boolean) => string = n => {
    if(n){
        return "good! arrow Func"
    }
   else{
       return "bad arrow Func"
   }
}

function func1():void {
    console.log("함수 리턴값이 없으면 void!")
  }
  function func2():string[] {
    return ["난 string이 들어간 배열을 리턴해줘야해"]
  }

  const txt = (text :string, desc:string,data:any) => {
    return (
      <>
      <h2 className='title'>{text}</h2>
      <p className='desc'>{desc}</p>
      <p className='result'>출력값 : {data}</p>
      <div className='line'></div>
      </>
    )
  }

  return (
    <div className='container'>
      
   <h2 className='title'>함수 식</h2>
        {funcPrac2(true)}
        <div className='line'></div>
        {funcPrac("12345")}
        <div className='line'></div>
        {funcPrac3(1 > 2)}

    </div>
  );
}

export default Func;
