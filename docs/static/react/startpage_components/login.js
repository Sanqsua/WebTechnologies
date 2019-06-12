/* STARTPAGE Login */

class Login extends React.Component {
  render(){

    return(             
    <div>
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content text-center">              
              <form className="form-signin" action="/login" method="POST">
                <img className="mb-2" src="../static/assets/images/login_logo.png" alt="Logo" width="150" height="150" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" name="loginEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" name="loginPassword" className="form-control" placeholder="Password" required />
                <a className="color-black" href="#" data-toggle="modal" data-target="#createAccount">No account yet? Register here!</a>
                <button className="btn btn-lg btn-primary btn-block shadow-none my-2" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>

        <div className="modal fade" id="createAccount" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content text-center">
              <form className="form-signin" action="/registrate" method="post">
                <img className="mb-2" src="../static/assets/images/login_logo.png" alt="Logo" width={150} height={150} />
                <h1 className="h3 mb-3 font-weight-normal">Create your Account</h1>
                <div className="form-group row">
                  <label htmlFor="accountUsername" className="sr-only">Username</label>
                  <input type="username" id="accountUsername" name="accountUsername" className="form-control" placeholder="Username" required autoFocus/>
                </div>
                <div className="form-group row">
                  <label htmlFor="accountEmail" className="sr-only">Email address</label>
                  <input type="email" id="accountEmail" name="accountEmail" className="form-control" placeholder="Email address" required />
                </div>
                <div className="form-group row">
                  <input type="password" id="accountPassword" name="accountPassword" className="form-control" placeholder="Password" required />
                </div>
                <button className="btn btn-lg btn-primary btn-block shadow-none" type="submit">Create
                  Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



