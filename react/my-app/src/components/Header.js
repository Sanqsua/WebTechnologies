/* Component, Header Startpage (Navbar) */

import React from "react";

import placeholderImg from './../assets/placeholder-image.png';

export class Header extends React.Component {
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
              <ul className="nav navbar-nav">
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                  Sign in
                </button>
              </ul>
            </div>
          </nav>
          </header>
        );
    }
}