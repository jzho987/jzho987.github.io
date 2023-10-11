import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from "./Components/MenuBar/MenuBar";
import {ThemeProvider} from "@mui/material";
import {GlobalTheme} from "./Theme/GlobalTheme";
import Routing from "./Pages/Navigation/Routing";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={GlobalTheme}>
            <MenuBar/>
            <Routing/>
        </ThemeProvider>
    </div>
  );
}

export default App;
