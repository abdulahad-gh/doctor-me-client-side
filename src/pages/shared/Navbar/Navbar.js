import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link class="navbar-brand" to="/">Doctor Me</Link>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="services">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="blogs">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="signin">SignIn</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;