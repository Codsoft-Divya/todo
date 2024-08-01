import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compilation from './Components/Compilation/Compilation';

function App() {
  return (
    <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<Compilation />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
