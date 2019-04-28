 /* App.js creates the Startpage */

import React from 'react';

/* Components */
import { Header } from "./components/Header";
import { Login } from "./components//Login";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

/* Stylesheet */
import './css/style.css';

function App() {

  return (
    <div className="App">

        <Header/>
        <Login/>
        <Main/>
        <Footer/> 
        
    </div>
  );
}

export default App;
