import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './navBar';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Navbar/>
                <h1>Contact Page</h1>
                <div className='home-page-content-container'>
                <div className="content-container">
                    <div className='pic'>
                        <img src="https://i.kym-cdn.com/entries/icons/facebook/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg" alt="profile pic or something similar"/>
                    </div>
                    <a href="https://www.linkedin.com/in/matthew-farnsworth/" target="blank" className="link">LinkedIn</a>
                    <a href="https://www.github.com/fun831/" target="blank" className='link'>GitHub</a>
                    <a href="https://drive.google.com/open?id=1JrMJJkZ9hyIswig9PBB4PemAYZvBALw5" target="blank" className='link'>My Resume</a>
                    <p>
                    Hello and welcome to my portfolio site. At the top you can navigate between pages
                    to learn more about me, my education, and projects I have done. 
                    </p>
                    <Link to="/projects" className="projects-button-link">See my projects</Link>
                </div>
                </div>
            </div>
        );
    }
}
export default Contact;