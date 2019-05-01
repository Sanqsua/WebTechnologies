 /* Home.js creates Home page*/

 import React from 'react';

 /* Components */
 import { Header_Home } from "./components/Header_Home";
 import { Main_Home } from "./components/Main_Home";
 import { Account_Home } from "./components/Account_Home";

 /* Stylesheet */
 import './css/style.css';
 
 function Home() {
 
   return (
     <div className="App">
 
         <Header_Home/>
         <Main_Home/>
         <Account_Home/>
         
     </div>
   );
 }
 
 export default Home;
 