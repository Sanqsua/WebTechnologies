/* HOME Account */

class Account extends React.Component {
    render(){
      return(
        <div>
         {/* Account modal */}
         <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content text-center">
                        <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Your Account</h1>
                        <p className="text-left">Username: {name}  </p>
                        <p className="text-left">Email address: {email} </p>
                        <p>Change Password and Email address</p>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                            required autofocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                            required />
                        {/* Account edit FLASK */}
                        <button className="btn btn-lg btn-primary btn-block mb-3" type="submit">Change</button>
                        <a className="color-black" href="#" data-toggle="modal" data-target="#deleteAccount">Want to delete your account?</a>
                    </form>
                </div>
            </div>
        </div>

        {/* Delete account modal */}
        <div className="modal fade" id="deleteAccount" tabIndex={-1} role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content text-center">
                    <h2 className="font-weight-normal m-3 mt-5">By clicking the button your account will permanently
                        deleted.
                    </h2>
                    <div className="form-signin">
                        {/* Account delete FLASK */}
                    <a href="/deleteAccount">
                            <button type="button" className="btn btn-lg btn-danger mb-5">Delete Account</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
      )
    }
  }