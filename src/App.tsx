import React from 'react';
import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import BasicType from './Component/BasicType';
import Func from './Component/func';
import Interface from './Component/interface';
import State from './Component/state';
import Effect from './Component/effect';
import Reducer from './Component/Reducer';

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
        인터페이스를 통한 타입 지정
      </button>
      <button
        onClick={() => {
          navigate('/state');
        }}
      >
        useState 타입 지정하는 법
      </button>
      <button
        onClick={() => {
          navigate('/effect');
        }}
      >
        useEffect 사용하는 법
      </button>
      <button
        onClick={() => {
          navigate('/reducer');
        }}
      >
        useReducer 사용하는 법
      </button>

      <Routes>
        <Route path='/BasicType' element={<BasicType />}></Route>
        <Route path='/func' element={<Func />}></Route>
        <Route path='/interface' element={<Interface />}></Route>
        <Route path='/effect' element={<Effect />}></Route>
        <Route path='/reducer' element={<Reducer />}></Route>
        <Route
          path='/state'
          element={<State name='성현' mark='마크' optional='옵셔널' />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
