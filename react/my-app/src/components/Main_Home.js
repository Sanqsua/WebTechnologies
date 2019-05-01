/* Component, Main Home */

import React from "react";

import placeholderImg from './../assets/placeholder-image.png';


export class Main_Home extends React.Component {
    render() {
        return (
            <main>
            {/* Main content */}
            <div className="container-fluid">
              <div className="row row-height">
                {/* Adverts */}
                <div className="col-12 col-md-6">
                  <form className="form-inline my-auto my-lg-0 text-center">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
                <div className="col-12 col-md-6 text-center">
                  <h1>Create und edit your adverts</h1>
                </div>
                <div className="col-12 col-md-6 scoll-adverts">
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                  <div className="row">
                    <img src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                    <h1>Placeholder Title</h1>
                    <p>Placeholder Price</p>
                  </div>
                </div>
                {/* Form */}
                <div className="col-12 col-md-6">
                  <form>
                    <div className="form-group row">
                      <label htmlFor="exampleFormControlInput1">Title</label>
                      <input className="form-control" type="text" placeholder="Title" />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="exampleFormControlInput1">Author</label>
                      <input className="form-control" type="text" placeholder="Author" />
                    </div>
                    <div className="form-group row">
                      <label htmlFor="exampleFormControlTextarea1">Description</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <div className="form-group row">
                      <div className="col-xs-2">
                        <label htmlFor="exampleFormControlInput1">Price</label>
                        <input className="form-control" type="text" placeholder="Price" />
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-primary" type="reset">Reset</button>
                      <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div></main>
        );
    }
}