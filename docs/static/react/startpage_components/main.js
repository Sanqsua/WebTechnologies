class Main extends React.Component {
  render(){
    return(
      <div>
         <main>
        <div className="container-fluid">
          {/* Adverts FLASK */}
          <div className="row">
            {'{'}% for book in books %{'}'}
            <div className="col-12 col-md-4 p-3 book-box">
              <div className="bg-light">
                <h1 className="ml-2 book-title">{'{'}{'{'}book.name{'}'}{'}'}</h1>
                <img className="float-left" src="../static/assets/images/books.png" alt="placeholder-image" width={100} height={100} />
                <div className="overflow-hidden color-black p-0 box">
                  <p className="ml-2 my-1 font-italic">{'{'}{'{'}book.author{'}'}{'}'}</p>
                  <p className="ml-2 my-1 font-weight-bold">Price: {'{'}{'{'}book.price{'}'}{'}'} €</p>
                  <p><a className="ml-2 my-1 color-black" tabIndex={0} data-toggle="popover" data-trigger="focus" data-placement="bottom" title="Description" data-content="{{book.description}}">Description ▼</a></p>
                  <div className="email">
                    <a className="h1" href="mailto:{{book.user.email}}?subject=Your Advert: {{book.name}}">✉</a>
                  </div>
                </div>
              </div>
            </div>
            {'{'}% endfor %{'}'}
          </div>
        </div>
      </main>
      </div>
    )
  }
}

