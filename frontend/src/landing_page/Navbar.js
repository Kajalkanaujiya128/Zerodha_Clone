import React from "react";
import { Link } from "react-router-dom";
function Navbar({ hideOptions }) {
  return (
   
      <nav class="navbar navbar-expand-lg border-bottom"
      style={{backgroundColor:"#FFF"}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg"
            style={{width:"25%"}}
            alt="Logo"/>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
               {!hideOptions && (
            <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
             <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>
            <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
            <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li> 
            </ul>

            </form>
            )}
{hideOptions && (
  <div style={{ marginLeft: "auto", marginRight: "20px" }}>
    <i
      className="fa-solid fa-circle-user"
      style={{ fontSize: "30px", color: "#387ed1" }}
    ></i>
  </div>
)}
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
