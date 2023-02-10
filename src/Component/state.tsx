import React, { useState } from 'react';
import styled from 'styled-components';

// props 타입 지정
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
};

const Code = styled.code`
  background: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const State = ({ name, mark, optional }: GreetingsProps) => {
  //초기값이 지정되어있으면 알아서 타입추론을 해주기때문에 그냥 사용해도 무방하다.
  const [str, setStr] = useState('string');

  //타입을 지정해주기위해서는 Generics를 사용해준다.
  const [genericsStr, setGenericsStr] = useState<number>();

  //상태의 타입이 두가지 이상일 때 ex)상태값에 따른 조건부 렌더링을 위한 null or undifined 사용 시
  // type을 선언해주거나, Interface 사용! type은 부등호를 사용하지만 inteface는 바로 코드블럭을 사용한다.
  type typeString = { str: string; str2: number };
  const [typeStr, setTypeStr] = useState<typeString | null>();

  interface interfaceString {
    str: string;
    str2: number;
  }
  const [interfaceStr, setInterfaceStr] = useState<interfaceString | null>({
    str: '인터페이스',
    str2: 1234,
  });
  const interfaceSet = (): void => {
    setInterfaceStr({
      ...interfaceStr,
      str: '인터페이스 상태값 변경',
      str2: 1234,
    });
  };

  //상태의 타입이 배열일 경우
  interface arrString {
    str: string;
    str2: number;
  }
  const [arrStr, setArrStr] = useState<arrString[]>([]);
  const arrSet = (): void => {
    setArrStr([...arrStr, { str: '배열 상태값', str2: 4321 }]);
  };

  return (
    <>
      <div>
        <h2>부모컴포넌트에서 props를 받아올 때!</h2>
        <p>{name} props</p>
        <p>{mark} props</p>
        <p>{optional === '옵셔널' ? '옵셔널입니다.' : '옵셔널 아닙니다.'}</p>

        <h2 className='title'>useState를 TS에서 쓸 때!</h2>

        <p>인터페이스를 사용한 상태 타입 선언</p>
        <p>{interfaceStr?.str}</p>
        <button onClick={interfaceSet}>인터페이스 상태값 변경</button>

        <p>배열타입의 상태값 출력</p>
        {arrStr.map((i) => {
          return (
            <>
              <p>{i.str}</p>
              <p>{i.str2}</p>
            </>
          );
        })}
        <button onClick={arrSet}>배열 추가</button>
      </div>
      <pre></pre>
    </>
  );
};

export default State;
