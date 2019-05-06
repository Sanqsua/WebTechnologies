/* Component, Header Home (Navbar) */

import React from "react";
import { Link } from 'react-router-dom';

import placeholderImg from './../assets/placeholder-image.png';


export class Header_Home extends React.Component {
    render() {
        return (
    <header>
    <nav className="navbar navbar-default bg-light fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img src={placeholderImg} className="d-inline-block align-top" alt="Logo" width={30} height={30} />
            Prototype ANTHIM
          </a>
        </div>
        <ul className="nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="#">Startpage</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#exampleModalCenter" data-toggle="modal" data-target="#exampleModalCenter">Account</a>
          </li>
          <button type="button" className="btn btn-primary" data-toggle="modal">
            Sign out
          </button>
        </ul>

        {/* TESTING*/}
        <ul>
          <li>
          <Link to="/">Startpage</Link>
          </li>
          <li>
          <Link to="/home">Home</Link>
           </li>
        </ul>
      </div>
    </nav>
    </header>
        );
    }
}