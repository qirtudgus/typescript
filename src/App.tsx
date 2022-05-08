import React from 'react';
import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import BasicType from './Component/BasicType';

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

      <Routes>
        <Route path='/BasicType' element={<BasicType />}></Route>
      </Routes>
    </div>
  );
}

export default App;
