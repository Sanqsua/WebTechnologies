/* Component, Footer Startpage */
import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small bottom">
            <div className="text-center py-3">
              <a href="#!">Privacy Policy</a>
              <a href="#!">Legal Notice</a>
              © 2019 Copyright:
              <a href="#">ANTHIM</a>
            </div>
          </footer>
        );
    }
}