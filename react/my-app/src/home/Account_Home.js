/* Component, Account Home  */

import React from "react";

export class Account_Home extends React.Component {
    render() {
        return (
    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content text-center">
            <form className="form-signin ">
            <h1 className="h3 mb-3 font-weight-normal">Your Account</h1>
            <p className="text-left">Username: blabla</p>
            <p className="text-left">Email address: blabla@blala.de</p>
            <p>Change password and/or Email address</p>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Change</button>
          </form>
        </div>
      </div>
    </div>
        );
    }
}