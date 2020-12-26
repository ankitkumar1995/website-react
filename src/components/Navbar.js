import React from "react";

const Navbar =()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href={"!#"}>GURA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href={"!#"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Discover
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href={"!#"}>Action</a></li>
                                    <li><a className="dropdown-item" href={"!#"}>Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href={"!#"}>Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"!#"}>Teach on Gura</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"!#"}>Sign up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"!#"}>Login</a>
                            </li>
                        </ul>  
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;


