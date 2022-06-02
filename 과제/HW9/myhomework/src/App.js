import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import First from './pages/First';
import Second from './pages/Second';
import Menubar from './pages/Menubar';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Menubar />}>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/1button' element={<First />}></Route>
        <Route path='/2button' element={<Second />}></Route>
      </Route>
    </Routes>
  );
};

export default App;