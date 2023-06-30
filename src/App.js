import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Meme from './components/Meme'
import BoxApp from './components/box-route/BoxApp';
import Layout from './components/layout/Layout';
import JokeApp from './components/jokes-example/JokeApp'
import Form from './components/forms-example/FormApp';
import Register from './components/register-example/RegisterPage';
import ApiUseEffect from './components/useEffect-example/ApiUseEffect';
import StateEffectExample from './components/state-effect-example/StateEffectExample';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Meme />} />
        <Route path="box" element={<BoxApp />} />
        <Route path='joke' element={<JokeApp />} />
        <Route path='form' element={<Form />} />
        <Route path='signup' element={<Register />} />
        <Route path='useEffect' element={<ApiUseEffect />} />
        <Route path='stateEffect' element={<StateEffectExample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
