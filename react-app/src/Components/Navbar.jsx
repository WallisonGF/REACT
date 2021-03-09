import React                from 'react';
import { Link }             from 'react-router-dom';
import styled               from 'styled-components';
import Logo                 from '../assets/img/logo-home3.png';

const Nav = styled.div`
    ul {display: flex;}
    li {list-style-type: none; text-decoration: none;}
`;

const Navbar = () => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-light shadow">
            <Link className="" to="/">
                <img src={Logo} width="120" height="60" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="dropdown">
                        <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Exercícios (React)
                        </button>
                        <div className="dropdown-menu position-absolute m-0 p-0" aria-labelledby="dropdownMenuButton">
                            <ul className="font-weight-bold d-inline">
                                <li><Link className="nav-item nav-link btn btn-outline-primary" to="/exercicio1">Buttons</Link></li>
                                <li><Link className="nav-item nav-link btn btn-outline-primary" to="/exercicio2">Mouse Position</Link></li>
                                <li><Link className="nav-item nav-link btn btn-outline-primary" to="/exercicio3">Store</Link></li>
                                <li><Link className="nav-item nav-link btn btn-outline-primary" to="/exercicio4">Form</Link></li>
                                <li><Link className="nav-item nav-link btn btn-outline-primary" to="/exercicio5">Form+</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Nav>
    )
}


export default Navbar;