import React from 'react';
import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import BasicType from './Component/BasicType';
import Func from './Component/func';
import Interface from './Component/interface';
import State from './Component/state';
import Test from './Component/Test';
import Layout from './Layout/layout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/BasicType' element={<BasicType />}></Route>
          <Route path='/func' element={<Func />}></Route>
          <Route path='/interface' element={<Interface />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route
            path='/state'
            element={<State name='성현' mark='마크' optional='옵셔널' />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
