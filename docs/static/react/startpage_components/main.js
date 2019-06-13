/* STARTPAGE Main */

class Main extends React.Component {

    state = {
        search: ""
    };
      
    renderBooks= books => {
        const { search } = this.state;
    return (
        <div className="col-12 col-md-4 p-3 book-box" key={books.id}>
            <div className="bg-light">
                <h1 className="ml-2 book-title">{books.name}</h1>
                <img className="float-left" src="../static/assets/images/books.png" alt="Book" width="100"
                    height="100" />
                <div className="overflow-hidden color-black p-0 box">
                    <p className="ml-2 my-1 font-italic">Author: {books.author}</p>
                    <p className="ml-2 my-1 font-weight-bold">Price: {books.price} €</p>
                    <p><a className="ml-2 my-1 color-black" tabIndex="0" data-toggle="popover" data-trigger="focus"
                            data-placement="bottom" title="Description" data-content={books.description}>Description ▷</a>
                    </p>
                    <div className="email">
                         <a className="h1" href={'mailto:' + books.email + '?subject=Your Advert:' + books.name}>✉</a>
                    </div>
                </div>
            </div>
        </div>
      );
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search } = this.state;
        const filteredBooks = booksArray.filter(books => {
        return books.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
   
    var loginButton;
    if (login) {
        loginButton=
        <ul className="nav navbar-right"> 
             <li className="nav-item">
                <a className="nav-link shadow-none" href="/home">Home</a>
             </li>  
             <a href="/logout">
                    <button type="button" className="btn btn-primary ml-4 shadow-none" data-toggle="modal">
                     Sign out
                    </button>
             </a>
        </ul>
    } else { 
        loginButton = 
        <ul className="nav navbar-right"> 
            <button type="button" className="btn btn-primary shadow-none" data-toggle="modal"
            data-target="#exampleModalCenter">
            Sign in
            </button>
        </ul>
    }

    return (
    <div>
      <header>
          <nav className="navbar navbar-default fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="#">
                          <img src="../static/assets/images/logo_nav.png" className="rounded-circle" alt="Logo"
                              width="40" height="40" />
                          <span className="ml-1">Book Road</span>
                      </a>
                  </div>
                  <ul className="nav navbar-nav">
                      <form className="form-inline my-2 my-lg-0">
                          <div className="input-group md-form form-sm form-2 pl-0">
                              <input id="search-bar" className="form-control my-0 py-1 shadow-none" type="text"
                                  name="search" placeholder="Search title .." aria-label="Search title" onChange={this.onchange}/>
                              <div className="input-group-append">
                                  <span className="input-group-text red lighten-3" id="basic-text1"><i
                                          className="fa fa-search text-grey" aria-hidden="true"/></span>
                              </div>
                          </div>
                      </form>
                  </ul>
                 
                  {loginButton} 

              </div>
          </nav>
      </header>

      <main>
      <div className="container-fluid">
          <div className="row">
              {filteredBooks.map(books => {
                return this.renderBooks(books);
              })}
            </div>
          </div>
      </main>
    </div>
    )
  }
}

