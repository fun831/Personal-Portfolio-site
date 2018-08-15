import React, { Component } from 'react';
import Navbar from './navBar';
import Project from './project';

class Projects extends Component {
    render() {
        this.projects = [
            {
                id: 0,
                title: "A MadLib",
                description: "Built with React using two way binding...",
                image: "/assets/madlib.png",
                institution: "Bottega",
                link: 'https://amadlib.herokuapp.com/'
            },
            {
                id: 1,
                title: "Birthday Count Down",
                description: "Built with React using CSS grid...",
                image: "/assets/countdown.png",
                institution: "Bottega",
                link: 'http://bdaycountdown.herokuapp.com/'
            },
            {
                id: 2,
                title: "Class Scheduler",
                description: "Built with React using CSS grid...",
                image: "/assets/scheduler.png",
                institution: "Bottega",
                link: 'https://class-scheduler-app.herokuapp.com/'
            }     
        ]
        return (
            <div className='projects-page'>
            <Navbar/>
                <div className='projects-content'>
                    <h1>Projects Page</h1>
                    <div className="projects">
                        {this.projects.map((project) => {
                            return <Project key={project.id} {...project}/>
                        })}
                    </div>
                </div>                
            </div>
        );
    }
}
export default Projects;