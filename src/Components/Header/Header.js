import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="/logo">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/link">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/About">About Us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success me-5" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;