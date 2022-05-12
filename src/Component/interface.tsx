import React from 'react';

function Interface() {

    //인터페이스 객체를 충족해야 사용 가능하다. 갯수가 맞아야할 필요는 없다.
    //타입검사가 주 목적이다.
    interface onInterface {
        a:string,
        b:string,
        c:number,
        f:number,
        onConsole():void;
        g?:string, // ?(옵셔널)을 붙이면 옵션속성이 되어, 조건을 충족하지않아도 오류가 나지않는다.
        readonly h:string; // 읽기전용 속성이 되어, 속성을 할당 후 변경하려하면 오류가 난다.
        [prop:string]: any; // 인덱스 시그니처 속성! 새로운 추가 속성을 명시적으로 any 타입으로 설정한 것으로 오류를 출력하지 않는다.

    }

    // 인터페이스 객체를 충족시키는 객체 생성
   let o = {a:"안녕",b:"인터페이스야", c:3,f:4, onConsole():void {console.log("난 인터페이스 객체의 onConsole이야")},h:"난 읽기전용이야", i:123,j:"난 제이야"}

   //당연히 인터페이스에만 맞는다면 객체의 값도 변경할 수 있다.
    o.a = "깔깔깔";
    //인터페이스에 없는 값을 추가하면 오류가 난다.
    // o.qq = "깔깔"



   function inter(f:onInterface):(string){
    let c = f.a + f.b;
    let d:number = f.f + f.c;
    f.onConsole();
    return d + c + f.h + f.i
   }

   //병합 시 하단에 선언해도 끌어올려진다.
   interface onInterface{
    i:number,
    j:string,
}

   console.log(inter(o))


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

    </div>
  );
}

export default Interface;
