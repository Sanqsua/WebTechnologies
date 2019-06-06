/* HOME Header */

class Header extends React.Component {
    render(){
      return(
        <div>
         <header>
        <nav className="navbar navbar-default fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    {/* Render startpage FLASK */}
                    <a className="navbar-brand shadow-none" href="/startpage">
                        <img src="../static/assets/images/logo_nav.png" className="rounded-circle" alt="Logo" width={40}
                            height={40} />
                        <span className="ml-1">Book Road</span>
                    </a>
                </div>
                <ul className="nav navbar-right">
                    {/* Render startpage FLASK */}
                    <li className="nav-item">
                        <a className="nav-link shadow-none" href="/startpage">Startpage</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#exampleModalCenter" data-toggle="modal"
                            data-target="#exampleModalCenter">Account</a>
                    </li>
                    {/* Sign out FLASK */}
                    <a href="/logout">
                        <button type="button" className="btn btn-primary ml-4 shadow-none" data-toggle="modal">
                            Sign out
                        </button>
                    </a>
                </ul>
            </div>
        </nav>
        </header>
        </div>
      )
    }
  }