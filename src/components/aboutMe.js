import React, { Component } from 'react';
import Navbar from './navBar';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                
                
                <div className="about_me_page">
                    <h1>About Me Page</h1>
                    <div className='about-me-content-container'> 
                        <div className='about_me_content'>
                        <img src="/assets/profile_pic.png" alt="profile pic or something similar"/>
                            <p>
                                I'm Matt Farnsworth, 
                                I’m a developer who enjoys solving problems through programming. 
                                I take pride in my work and strive to make my projects clean, 
                                efficient, and built to last. I enjoy learning new things and 
                                expanding my knowledge. Working as a finish carpenter I have 
                                developed skills to be attentive to detail. I have the ablility 
                                to dig into a project until the job is done and be able to find 
                                solutions to complex problems. It is rewarding finding a solution 
                                to a challenge I’m faced with. Besides programming some things 
                                I enjoy are the outdoors, being with family, and designing and 
                                building wood projects.
                            </p>
                        </div>   
                    </div>         
                </div>
            </div>
            
        );
    }
}
export default AboutMe;