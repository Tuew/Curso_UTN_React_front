import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? "activo" : undefined}>About</NavLink></li>
                    <li><NavLink to="/services" className={({isActive}) => isActive ? "activo" : undefined}>Servicios</NavLink></li>
                    <li><NavLink to="/news" className={({isActive}) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;