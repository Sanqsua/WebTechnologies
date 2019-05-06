/* Component, Login Startpage (Navbar) */

import React from "react";

import placeholderImg from './../assets/placeholder-image.png';

export class Login extends React.Component {
    render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content text-center">
                <form className="form-signin">
                  <img className="mb-4" src={placeholderImg} alt width={72} height={72} />
                  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                  <label htmlFor="inputEmail" className="sr-only">Email address</label>
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" defaultValue="remember-me"/> Remember me
                    </label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
              </div>
            </div>
            </div>
        );
    }
}





