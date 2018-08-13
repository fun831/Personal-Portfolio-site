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
                image: "Possible image here...",
                institution: "Bottega",
                link: 'https://amadlib.herokuapp.com/'
            },
            {
                id: 1,
                title: "Birthday Count Down",
                description: "Built with React using CSS grid...",
                image: "Possible image here...",
                institution: "Bottega",
                link: 'http://bdaycountdown.herokuapp.com/'
            },
            {
                id: 2,
                title: "Class Scheduler",
                description: "Built with React using CSS grid...",
                image: "Possible image here...",
                institution: "Bottega",
                link: 'https://class-scheduler-app.herokuapp.com/'
            }     
        ]
        return (
            <div className="projects">
                <Navbar/>
                <h1>Projects Page</h1>
                {this.projects.map((project) => {
                    return <Project key={project.id} {...project}/>
                })}
            </div>
        );
    }
}
export default Projects;