import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';

const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to={"/"} class="navbar-brand" href="#">WalletConnect</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""><i class="toggle-icon fas fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link to={"/Formpage"} class="nav-link active" href="#">Encrypt Wallet</Link>
                    </li>
                </ul>
                <form class="d-flex">
                <small>version 2.1</small>
                </form>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
