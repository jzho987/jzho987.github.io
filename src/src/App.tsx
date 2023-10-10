import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from "./Components/MenuBar/MenuBar";
import HeaderBar from "./Components/Header/HeaderBar";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <HomePage/>
    </div>
  );
}

export default App;
