import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavBar from './navBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='home-page-content-container'>
          <div className="content-container">
            <div className='pic'>
              <img src="/assets/profile_pic.png" alt="profile pic or something similar"/>
            </div>
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
