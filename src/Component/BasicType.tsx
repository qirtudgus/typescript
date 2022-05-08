import React from 'react';

function BasicType() {
  let str: string = '문자열은 string';
  let num: number = 14;
  let boolean: boolean = false;
  let boolean2: boolean = true;

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

  console.log(chocolate1); // Ko
  console.log(chocolate2); // Bo
  console.log(chocolate3); // Co
  console.log(chocolate4); // Co

  return (
    <>
      {
        <>
          <p>{str}</p>
          <p>숫자는 number {num}</p>
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

          <p>{chocolate1}</p>
          <p>{chocolate2}</p>
          <p>{chocolate3}</p>
          <p>{chocolate4}</p>
        </>
      }
    </>
  );
}

export default BasicType;
