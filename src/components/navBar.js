// Navbar.js
// Navbar.js

import React from 'react';
import logo from '../images/logo.png'


function Navbar() {
  return (
    <><nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src={logo} width="auto" height="auto" /> 
            </h5>

            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link mx-lg-2 active " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Where to Find Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#">Review</a>
              </li>
            </ul>
          </div>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav><section className='hero-section'>

      </section></>
  );
}


export default Navbar;

