import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Header() {

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html"><h><i class="fa fa-home"></i></h></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-link"> <Link to="/Contact">CONTACT</Link>
            </li>
            <li class="nav-link"><Link to="/Portfolio">Portfolio</Link>
            </li>
            <li class="nav-link"><Link to="/Home">Home</Link>
            </li>   
        </ul>
    </div>
</nav>


}


export default Header