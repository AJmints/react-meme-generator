import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Meme from './components/Meme'
import BoxApp from './components/box-route/BoxApp';
import Layout from './components/layout/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Meme />} />
        <Route path="box" element={<BoxApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
