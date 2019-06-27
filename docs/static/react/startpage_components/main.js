/* STARTPAGE Main */

class Main extends React.Component {

    state = {
        search: ""
    };
      
    renderBooks= books => {
        const { search } = this.state;

    return (
        /* Display books */
        <div className="col-12 col-md-4 p-3 book-box" key={books.id}>
            <div className="bg-light">
                <h1 className="ml-2 book-title">{books.name}</h1>
                <img className="float-left" src={'../static/assets/images/' + books.image } alt="Book" width="100"
                    height="100" />
                <div className="overflow-hidden color-black p-0 box">
                    <p className="ml-2 my-1 font-italic">Author: {books.author}</p>
                    <p className="ml-2 my-1 font-weight-bold">Price: {books.price} €</p>
                    <p><a className="ml-2 my-1 color-black" href="#" data-toggle="modal" data-target={ '#showMore' + books.id } >Show more ▷</a>
                    </p>
                    <div className="email">
                         <a className="h1" href={'mailto:' + books.email + '?subject=Your Advert: ' + books.name}>✉</a>
                    </div>
                </div>
            </div>

        {/* Show more Modal*/}
        <div className="modal fade" id={ 'showMore' + books.id } tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content text-center">              
            <form className="form-signin">
            <h3>{books.name}</h3>
            <img className="mb-2" src={'../static/assets/images/' + books.image } alt="Book" width="250" height="250" />
            <p className="ml-2 my-1 float-left"><span className="font-weight-bold">Author:</span> {books.author}</p>
            <p className="ml-2 my-1 "><span className="font-weight-bold">Price:</span> {books.price} €</p>
            <h4>Description</h4>
            <p className="ml-2 mb-2 text-left">{books.description}</p>
            <p className="m-0">Contact user <strong>{books.username}</strong> to get the book!</p>
            <a className="h1 color-black m-0" href={'mailto:' + books.email + '?subject=Your Advert: d' + books.name}>✉</a>
            </form>
        </div>
        </div>
        </div>
        </div>
      );
    };

    /* Searchbar input change */
    onchange = e => {
        this.setState({ search: e.target.value });
    };

    /* Render Filteredbooks */
    render() {
        const { search } = this.state;
        const filteredBooks = booksArray.filter(books => {
        return books.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
   

    /* Display Sign in or Sign out Button*/
    var loginButton;
    if (login) {
        loginButton=
        <ul className="nav navbar-right"> 
             <li className="nav-item">
                <a className="nav-link shadow-none" href="/home">Home</a>
             </li>  
             <a className="ml-4" href="/logout">  {/* Sign out FLASK*/}
                    <button type="button" className="btn btn-primary shadow-none">
                     Sign out
                    </button>
             </a>
        </ul>
    } else { 
        loginButton = 
        <ul className="nav navbar-right"> 
            <button type="button" className="btn btn-primary shadow-none" data-toggle="modal"
            data-target="#loginModal">
            Sign in
            </button>
        </ul>
    }

    return (
    <div>
      {/* Navbar */}
      <header>
          <nav className="navbar navbar-default fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="#">
                          <img src="../static/assets/images/logo_nav.png" className="rounded-circle" alt="Logo"
                              width="40" height="40" />
                          <span className="ml-2">Book Road</span>
                      </a>
                  </div>
                  <ul className="nav navbar-nav">
                      <form className="form-inline my-2 my-lg-0">
                          <div className="input-group md-form form-sm form-2 pl-0">
                              <input id="search-bar" className="form-control my-0 py-1 shadow-none" type="text"
                                  name="search" placeholder="Search title .." aria-label="Search title" onChange={this.onchange}/> {/* Searchbar */}
                              <div className="input-group-append">
                                  <span className="input-group-text red lighten-3" id="basic-text1"><i
                                          className="fa fa-search text-grey" aria-hidden="true"/></span>
                              </div>
                          </div>
                      </form>
                  </ul>
                 
                  {/* Sign in or Sign out Button */}
                  {loginButton} 

              </div>
          </nav>
      </header>
     
      <main>
       {/* Books */}
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

