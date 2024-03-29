import React from 'react';
import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import BasicType from './Component/BasicType';
import Func from './Component/func';
import Interface from './Component/interface';
import State from './Component/state';
import Layout from './Layout/layout';
import Effect from './Component/effect';
import Reducer from './Component/Reducer';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/BasicType' element={<BasicType />}></Route>
          <Route path='/func' element={<Func />}></Route>
          <Route path='/interface' element={<Interface />}></Route>
          <Route path='/effect' element={<Effect />}></Route>
          <Route path='/reducer' element={<Reducer />}></Route>
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
