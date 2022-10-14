import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="Assests/forkswap.png" alt="" width={'150px'}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1">Feature</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1"> Litepaper</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <b className="c1">Platform</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                 <b className="c1">Roadmaps</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1"> FAQs</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1">Audit Report</b>
                </a>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
    </div>
  );
}

export default Header;
