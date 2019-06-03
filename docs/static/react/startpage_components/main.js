class Main extends React.Component {
  render(){

    let row = [];
    for (var i = 0; i < arrayBooksName.length; i++) {
        row.push(
        <div className="col-12 col-md-4 p-3 book-box">
          <div className="bg-light"> 
            <h1 className="ml-2 book-title">{arrayBooksName[i]}</h1>
            <img className="float-left" src="../static/assets/images/books.png" alt="placeholder-image" width={100} height={100} />
            <div className="overflow-hidden color-black p-0 box">
              <p className="ml-2 my-1 font-italic">{arrayBooksAuthor[i]}</p>
              <p className="ml-2 my-1 font-weight-bold">Price: {arrayBooksPrice[i]} €</p>
              <p><a className="ml-2 my-1 color-black" tabIndex="0" data-toggle="popover" data-trigger="focus" data-placement="bottom" title="Description" data-content="halo">Description ▼</a></p>
              <div className="email">
                <a className="h1" href={'mailto:' + arrayBooksEmail[i] + '?subject=Your Advert:' + arrayBooksName[i]} >✉</a>
              </div>
            </div>
          </div>
        </div>
        );
    }

    return(
      <div>
         <main>
         <div className="container-fluid">
            <div className="row">
  	        {row} 
          </div>
        </div>
      </main>
      </div>
    )
  }
}

