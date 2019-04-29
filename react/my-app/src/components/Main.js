/* Component, Main Startpage (Adverts) */

import React from "react";

import placeholderImg from './../assets/placeholder-image.png';

export class Main extends React.Component {
    render() {
        return (
            <main>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-4 p-4">
                  <img className="float-left text-center" src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                  <div className="overflow-hidden">
                  <h1 className="mr-3">Das ist ein Buch, oder nicht?</h1>
                  <p className="float-left mr-3">Vorname Nachname</p> <p>30€</p>
                  <p>Description:</p>    
                  <a href="mailto:email@echoecho.com?subject=Your Advert: NameofBook">Send Email</a>          
                  </div>
                </div>
                <div className="col-12 col-md-4 p-4">
                  <img className="float-left text-center" src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                  <div className="overflow-hidden">
                  <h1 className="mr-3">Das ist ein Buch, oder nicht?</h1>
                  <p>Vorname Nachname</p> <p>30€</p>
                  <p>Description:</p>    
                  <a href="mailto:email@echoecho.com?subject=Your Advert: NameofBook">Send Email</a>          
                  </div>
                </div>
                <div className="col-12 col-md-4 p-4">
                  <img className="float-left text-center" src={placeholderImg} alt="placeholder-image" width={100} height={100} />
                  <div className="overflow-hidden ">
                  <h1 className="mr-3">Das ist ein Buch, oder nicht?</h1>
                  <p>Vorname Nachname</p> <p>30€</p>
                  <p>Description:</p>    
                  <a href="mailto:email@echoecho.com?subject=Your Advert: NameofBook">Send Email</a>          
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                  <img src={placeholderImg} alt="placeholder-image" width={250} height={250} />
                  <h1>Placeholder Title</h1>
                  <p>Placeholder Price</p>
                </div>
                <div className="col-12 col-md-4 text-center">
                  <img src={placeholderImg} alt="placeholder-image" width={250} height={250} />
                  <h1>Placeholder Title</h1>
                  <p>Placeholder Price</p>
                </div>
                <div className="col-12 col-md-4 text-center">
                  <img src={placeholderImg} alt="placeholder-image" width={250} height={250} />
                  <h1>Placeholder Title</h1>
                  <p>Placeholder Price</p>
                </div>
                <div className="col-12 col-md-4 text-center">
                  <img src={placeholderImg} alt="placeholder-image" width={250} height={250} />
                  <h1>Placeholder Title</h1>
                  <p>Placeholder Price</p>
                </div>
                <div className="col-12 col-md-4 text-center">
                  <img src={placeholderImg} alt="placeholder-image" width={250} height={250} />
                  <h1>Placeholder Title</h1>
                  <p>Placeholder Price</p>
                </div>
              </div>
            </div>
          </main>
        );
    }
}