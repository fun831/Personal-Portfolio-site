import React, { Component } from 'react';
import Navbar from './navBar';

class AboutMe extends Component {
    render() {
        return (
            <div className="about_me">
                <Navbar/>
                <h1>About Me Page</h1>
            </div>
        );
    }
}
export default AboutMe;