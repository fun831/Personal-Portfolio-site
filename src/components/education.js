import React, { Component } from 'react';
import Navbar from './navBar';
import Course from './course';

class Education extends Component {
    render() {
        this.courses = [
            {
                id: 0,
                title: "Course Name",
                description: "Course Description Goes Here",
                image: "Possible image here...",
                institution: "place of study"
            },
            {
                id: 0,
                title: "Course Name",
                description: "Course Description Goes Here",
                image: "Possible image here...",
                institution: "place of study"
            },
            {
                id: 0,
                title: "Course Name",
                description: "Course Description Goes Here",
                image: "Possible image here...",
                institution: "place of study"
            },
            {
                id: 0,
                title: "Course Name",
                description: "Course Description Goes Here",
                image: "Possible image here...",
                institution: "place of study"
            }
        ]
        return (
            <div className="education">
                <Navbar/>
                <h1>Education Page</h1>
                {this.courses.map((course) => {
                    return <Course key={course.id} {...course}/>
                })}
            </div>
        );
    }
}
export default Education;