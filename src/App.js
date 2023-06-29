import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Meme from './components/Meme'
import BoxApp from './components/box-route/BoxApp';
import Layout from './components/layout/Layout';
import JokeApp from './components/jokes-example/JokeApp'
import Form from './components/forms-example/FormApp';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Meme />} />
        <Route path="box" element={<BoxApp />} />
        <Route path='joke' element={<JokeApp />} />
        <Route path='form' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
