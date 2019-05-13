import React from 'react';
import ReactDOM from 'react-dom';

/* Components */
import { Header } from "./startpage/Header";
import { Login } from "./startpage/Login";
import { Footer } from "./startpage/Footer";
import { Main } from "./startpage/Main";

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

ReactDOM.render(routing, document.getElementById('root'));