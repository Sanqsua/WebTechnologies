/* HOME Account */

class Account extends React.Component {
    render() {
        return (
            <div>
                {/* Account modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <form className="form-signin" action='/editUser' method='POST'> {/* Account edit FLASK */}
                            <h1 className="h3 mb-3 font-weight-normal text-center">Your Account</h1>
                                <p className="text-center">Username: {name}  </p>
                                <p className="text-center">Email address: {email} </p>
                                <p className="text-center font-weight-bold">Change account information</p>
                                <label htmlFor="inputUsername">Change username</label>
                                <input maxLength="30" type="text" id="inputUsername" name ="editUsername" className="form-control" placeholder="New username"
                                    />
                                <label className="mt-2" htmlFor="inputEmail" >Change Email address</label>
                                <input maxLength="50" type="email" id="inputEmail" name ="editEmail" className="form-control" placeholder="New Email address"
                                    />
                                <label className="mt-2" htmlFor="inputNewPassword">Change password</label>
                                <input maxLength="30" type="password" id="inputNewPassword" name ="editNewPassword" className="form-control" placeholder="New password"
                                    />
                                <label className="mt-2 font-weight-bold" htmlFor="inputCurrentPassword">Type current password</label>
                                <input maxLength="30" type="password" id="inputCurrentPassword" name ="editCurrentPassword"className="form-control" placeholder="Current Password"
                                    required />
                                <button className="btn btn-lg btn-primary btn-block mb-3" type="submit">Change</button>
                                <div className="text-center">
                                <a className="color-black" href="#" data-toggle="modal" data-target="#deleteAccount">Want to delete your account?</a>
                                </div>
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
                                <a href="/deleteUser">
                                    <button type="submit" className="btn btn-lg btn-danger mb-5">Delete Account</button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}