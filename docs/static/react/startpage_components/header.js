class Header extends React.Component {
    render(){
      return(
      <header>
      <nav className="navbar navbar-default fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img src="../static/assets/images/logo_nav.png" className="rounded-circle" alt="Logo" width={40} height={40} />
              <span className="ml-1">Book Road</span>
            </a>
          </div>
          {/* Search adverts FLASK */}
          <ul className="nav navbar-nav">
            <form className="form-inline my-2 my-lg-0">
              <div className="input-group md-form form-sm form-2 pl-0">
                <input id="search-bar" className="form-control my-0 py-1 shadow-none" type="text" name="search" placeholder="Search title .." aria-label="Search title" />
                <div className="input-group-append">
                  <span className="input-group-text red lighten-3" id="basic-text1"><i className="fa fa-search text-grey" aria-hidden="true" /></span>
                </div>
              </div>
            </form>
          </ul>
          {/* Sign in */}
          <ul className="nav navbar-nav navbar-right">
            <button type="button" className="btn btn-primary shadow-none" data-toggle="modal" data-target="#exampleModalCenter">
              Sign in
            </button>
          </ul>
        </div>
      </nav>
      </header>
      )
    }
  }