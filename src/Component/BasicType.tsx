import React from 'react';

function BasicType() {
  let str: string = '문자열은 string';
  let num: number = 14;
  let boolean: boolean = false;
  let boolean2: boolean = true;
  let arr: number[] = [1,2,3];
  let arr2: Array<string> = ["일",'이','삼']
  let arr3 = [1,2,3] 
  let arr4:(string|number)[] = ["str",22,"str"] 
  let tuple:[number,string] = [5,'튜플'] 
  
  let any : any = "아무거나 대입되는 Any"
  let any2 = 1 + "number와 string을 합침"
  let union :(string|number) = 1 + "number와 string을 합침"


 
  let obj : {a:string,b:number} = {a:"ㅋㅋㅋ", b:1234}
  let obj2 : {a:string,b:number,[name:string]:any} = {a:"ㅋㅋㅋ", b:1234}
  function add():string{
    return "gg"
  }
  obj2.c = add();
  obj2.d = true;


  let voidUndifined:void = undefined;

  function func1():void {
    console.log("함수 리턴값이 없으면 void!")
  }
  function func2():string[] {
    return ["난 string이 들어간 배열을 리턴해줘야해"]
  }


  enum ABC {
    A = 'Ko',
    B = 'Bo',
    C = 'Co',
    D = 4,
  }
  let chocolate1: ABC = ABC.A;

  //인덱스 번호로 접근할 수 있다.
  let chocolate2: string | ABC = ABC[1]; // undifined

  //이넘의 인덱스를 변경하여 사용할 수 도 있다.
  let chocolate3: ABC = ABC.C; // C
  let chocolate4: ABC = ABC.D; // C

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
      {
        <>
        {txt("string","문자열은 let str : string 으로 명시해줍니다." , str)}
        {txt("number","숫자는 let num : number 로 명시해줍니다." , num)}
        {txt("Boolean","불린값은 let bool : boolean 로 명시해줍니다." , boolean)}
        {boolean ? null : (
            <>
              <p>불린값이 false일 때</p>
            </>
          )}

          {boolean2 ? (
            <>
              <p>불린값이 true일 때</p>
            </>
          ) : null}
          {txt("Enum","Enum은 열거형 데이터 타입을 지원한다" , chocolate1)}     
          {txt("Arr","배열은 let arr : number[] 처럼 배열 리터럴 앞에 타입을 명시해줍니다.  " , arr)}
          {txt("암묵적 Arr","배열에 타입을 정의하지않고 같은 타입의 요소만 있다면 암묵적으로 그 타입으로 지정됩니다. ex)let arr = [1,2,3]에는 number만 들어간다. " , arr3)}
          {txt("특정 타입 Arr","한가지가 아닌 다수의 타입을 지정하고싶으면 let arr:(string|number)[] 로 명시한다." , arr4)}
          {txt("제네릭을 사용한 Arr","let arr : Array<string> 처럼 제네릭을 사용할 수도 있습니다. " , arr2)}
          {txt("Tuple","let arr: [string,boolean] = [str,true] 처럼 명시하면 배열의 인덱스의 길이가 고정되며 명시된 타입만 들어갈 수 있는데, 그런 배열을 튜플(터플)이라 한다." , tuple)}
          {txt("Any","any는 변수에 모든 타입의 값을 대입할 수 있게해주는 타입입니다. ley all: any = 숫자도 문자도 전부 가능! " , any)}
          {txt("암묵적 Any","변수 선언과 초기화 과정에서 타입을 명시해주지않은 변수는 암묵적으로 any타입으로 지정됩니다. " , any2)}
          {txt("object"," let obj : {a:string,b:number} = {a:str, b:1234} 객체는 키의 이름과 밸류값의 타입을 명시해준다. 그치만 키를 추가하려면 오류가 난다!" , null)}
          {txt("object에 값을 추가하려면?",`  let obj2 : {a:string,b:number,[propname:string]:any} = {a:"ㅋㅋㅋ", b:1234}
           세번째처럼 설정하면 뒤에 들어오는 키값에는 string타입 밸류 any타입으로 객체 추가가 가능하다. 이러면 매번 객체에 키와 밸류값을 추가해주는 번거로움을 덜겠지!
           키값을 설정하는 [propname:string]에서 꼭 propname으로 기입해줘야하는것은 아니다. [a:string]식으로도 가능.
 ` ,null)}
          {txt("Union","let a:(string|numer)처럼 파이프(|)를 이용하여 다수의 타입이 대입되는것을 유니온타입이라 한다.  자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입입니다." , union)}
          {txt("함수 매개변수에 타입선언","function setInfo(id:number, name:string){}처럼 매개변수 뒤에 타입지정, 매개변수에 여러 타입이 할당되면 setInfo(id:(number|string), name:(string|boolean)){}으로 명시 " , any2)}
          {txt("함수 리턴 타입","function func():string {} 처럼 매개변수괄호 뒤에 타입을 지정해준다." , union)}
        </>
      }
    </div>
  );
}

export default BasicType;
