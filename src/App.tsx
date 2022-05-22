import React from 'react';
import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import BasicType from './Component/BasicType';
import Func from './Component/func';
import Interface from './Component/interface';
import State from './Component/state';

function App() {
  const navigate = useNavigate();

  return (
    <div className='App'>
      <h1>타입스크립트 공부하자</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        go Home
      </button>
      <button
        onClick={() => {
          navigate('/BasicType');
        }}
      >
        변수의 기본 타입
      </button>
      <button
        onClick={() => {
          navigate('/func');
        }}
      >
        함수 식
      </button>
      <button
        onClick={() => {
          navigate('/interface');
        }}
      >
        인터페이스
      </button>
      <button
        onClick={() => {
          navigate('/state');
        }}
      >
        useState
      </button>

      <Routes>
        <Route path='/BasicType' element={<BasicType />}></Route>
        <Route path='/func' element={<Func />}></Route>
        <Route path='/interface' element={<Interface />}></Route>
        <Route
          path='/state'
          element={<State name='성현' mark='마크' optional='옵셔널' />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
