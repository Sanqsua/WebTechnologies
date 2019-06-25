/* HOME Main */

class Main extends React.Component {

    state = {
        search: "",
       
    };
      
    renderBooks= books => {
        const { search } = this.state; 
   
    return (
    /* Display books */
    <div className="row bg-light my-3 mx-1 p-2 box book-box" key={books.id}>
    <div>
        <h1 className="book-title">{books.name}</h1>
        <img className="float-left" src="..\static\assets\images\books.png" alt="placeholder-image" width="100"
            height="100" />
        <div className="overflow-hidden color-black p-0 float-left">
            <p className="ml-2 my-1 font-italic">Author: {books.author} </p>
            <p className="ml-2 my-1 font-weight-bold">Price: {books.price} €</p>
            <p><a className="ml-2 my-1 color-black" href="#" data-toggle="modal" data-target={ '#showMore' +
                    books.id }>Show more ▷</a>
            </p>
        </div>
        <div className="del-edit-buttons">
            <button data-toggle="modal" data-target={ '#addImageModal' + books.id }
                className="btn btn-primary shadow-none mx-1">Add Image</button>

            <button data-toggle="modal" data-target={ '#editModal' + books.id }
                className="btn btn-primary shadow-none mx-1">Edit</button>

            <form className="float-right" action={ '/deleteBook/' + books.id } method="post"> {/* Delete book FLASK */}
                <button className="btn btn-primary shadow-none delete-button mx-1" type="submit">Delete</button>
            </form>
        </div>

        {/* Show more Modal*/}
        <div className="modal fade" id={ 'showMore' + books.id } tabIndex={-1} role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content text-center">
                    <form className="form-signin">
                        <h3>{books.name}</h3>
                        <img className="mb-2" src="../static/assets/images/books.png" alt="Book" width="250"
                            height="250" />
                        <p className="ml-2 my-1 float-left"><span className="font-weight-bold">Author:</span> {books.author}</p>
                        <p className="ml-2 my-1 "><span className="font-weight-bold">Price:</span> {books.price} €
                        </p>
                        <h4>Description</h4>
                        <div>
                        <p className="ml-2 mb-2">{books.description}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        {/* Edit book modal */}
        <div className="modal fade" id={ 'editModal' + books.id } tabIndex={-1} role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <form className="p-4" action={ '/editBook/' + books.id } method="POST"> {/* Edit book FLASK */}
                        <div className="form-group row">
                            <label htmlFor="editTitle">Title</label>
                            <input maxlength="30" className="form-control" id="editTitle" name="editTitle" type="text"
                                placeholder="Title" required />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="editAuthor">Author</label>
                            <input maxlength="30"className="form-control" id="editAuthor" name="editAuthor" type="text"
                                placeholder="Author" required />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="editDescription">Description</label>
                            <textarea maxlength="300" className="form-control" id="editDescription" name="editDescription" placeholder="Description"  rows={3}></textarea>
                            </div>
                        <div className="form-group row">
                            <div className="col-xs-2 p-0">
                            <label htmlFor="editPrice">Price in €</label>
                            <input className="form-control" id="editPrice" name="editPrice" type="number" min={0} placeholder="Price"  required />
                            </div>
                        </div>
                        <div className="form-group row">
                        <div className="custom-file my-4">
                                <input type="file" className="custom-file-input" name="image" id="image"
                                aria-describedby="ImageFile" />
                                <label className="custom-file-label" for="image">Upload Image</label>
                        </div>
                        </div>
                <div className="text-center">
                    <button className="btn btn-primary shadow-none" type="reset">Reset</button>
                    <button className="btn btn-primary shadow-none" type="submit">Submit</button>
                </div>
                </form>
            </div>
            </div>
        </div>

        <div className="modal fade" id={ 'addImageModal' + books.id } tabIndex={-1} role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <form className="p-4" action={ '/addImage/' + books.id } method="POST"> {/* Add ImageFLASK */}
                    <div className="custom-file my-4">
                                <input type="file" className="custom-file-input" name="image" id="image"
                                aria-describedby="ImageFile" required />
                                <label className="custom-file-label" for="image">Upload Image</label>
                    </div>
                    <button className="btn btn-primary shadow-none" type="submit">Submit</button>
                </form>
            </div>
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
    
    return (
        <div>
            <main>
            <div className="container-fluid">
                <div className="row row-height">
                    {/* Search adverts */}
                    <div className="col-12 col-md-6 my-2">
                        <form className="form-inline my-2 my-lg-0">
                            <div className="input-group md-form form-sm form-2 pl-0">
                                <input id="search-bar" className="form-control my-0 py-1 shadow-none" type="text" name="search"
                                    placeholder="Search title .." aria-label="Search title" onChange={this.onchange} /> {/* Searchbar */}
                                <div className="input-group-append">
                                    <span className="input-group-text red lighten-3" id="basic-text1"><i
                                            className="fa fa-search text-grey" aria-hidden="true" /></span>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* "Create your adverts" title */}
                    <div className="col-12 col-md-6 text-center my-2">
                        <h1>Create your adverts</h1>
                    </div>

                    {/* Display adverts */}
                    <div className="col-12 col-md-6 scoll-adverts">
                        {filteredBooks.map(books => {
                            return this.renderBooks(books);
                        })}
                    </div>

                    <div className="col-12 col-md-6 px-5 pt-3">
                        <form action="/createBook" method="post"> {/* Form create book adverts FLASK  */}
                            <div className="form-group row">
                                <label htmlFor="createTitle">Title</label>
                                <input maxlength="30" className="form-control" id="createTitle" name="createTitle" type="text"
                                    placeholder="Title" required />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="createAuthor">Author</label>
                                <input maxlength="30" className="form-control" id="createAuthor" name="createAuthor" type="text"
                                    placeholder="Author" required />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="createDescription">Description</label>
                                <textarea maxlength="300" className="form-control" id="createDescription" name="createDescription"  placeholder="Description" rows={3}></textarea>
                                </div>
                            <div className="form-group row">

                            <div className="col-xs-2 p-0">
                                <label htmlFor="createPrice">Price in €</label>
                                <input className="form-control" id="createPrice" name="createPrice" type="number" min={0} placeholder="Price" required />
                            </div>                           
                            <div className="custom-file my-4">
                                <input type="file" className="custom-file-input" name="image" id="image"
                                aria-describedby="ImageFile" />
                                <label className="custom-file-label" for="image">Upload Image</label>
                            </div>
                    </div>
                    <div className="text-center">
                    <button className="btn btn-primary shadow-none" type="reset">Reset</button>
                    <button className="btn btn-primary shadow-none" type="submit">Submit</button>
                    </div>
                </form>
                </div>
            </div>           
          </div>
        </main>
        </div>
      )
    }
  }