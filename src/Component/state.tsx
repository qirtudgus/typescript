import React, { useState } from 'react';
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
};

const State = ({ name, mark, optional }: GreetingsProps) => {
  return (
    <>
      <div>
        <p className=''>useState를 TS에서 쓸 때!</p>
        <p>{name}</p>
        <p>{mark}</p>
        <p>{optional === '옵셔널' ? '옵셔널입니다.' : '옵셔널 아닙니다.'}</p>
      </div>
    </>
  );
};

export default State;
