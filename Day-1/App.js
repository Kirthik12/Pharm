import React from "react";
import './App.css';
import { Router,Routes,Route } from 'react-router-dom';
const App=()=>
{
  <div>
    <Router>
      <Routes>
        <Route path='/login' element={<login/>} />
        <Route path='/signup' element={<signup/>} />
      </Routes>
    </Router>
  </div>
}
export default App;