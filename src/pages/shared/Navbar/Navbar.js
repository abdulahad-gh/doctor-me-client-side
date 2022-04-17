import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase-init';
import { signOut } from 'firebase/auth'

const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#home">Doctor Me</a>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/check-out">CheckOut</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/blogs">Blogs</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            {
                                user ? <button className='btn btn-warning' onClick={() => signOut(auth)}>SignOut</button>
                                    :
                                    <Link className="nav-link " to="/sign-in">SignIn</Link>}
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;