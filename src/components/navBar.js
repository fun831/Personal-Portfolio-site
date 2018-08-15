import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="#" className="toggle" id="navHamburger">
                    <i className="fas fa-bars"></i>
                </a>
                <Link to="/" className="brand">Logo</Link>
                <div className='links'>    
                    <Link to="/" className="link">Home</Link>
                    <Link to="/projects" className="link">Projects</Link>
                    <Link to="/education" className="link">Education</Link>            
                    <Link to="/about" className="link">About Me</Link>
                    <Link to="/contact" className="link">Contact</Link>
                </div>
                
            </div>
        );
    }
}