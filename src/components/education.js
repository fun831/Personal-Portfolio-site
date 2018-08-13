import React, { Component } from 'react';
import Navbar from './navBar';
import Course from './course';

class Education extends Component {
    render() {
        this.courses = [
            {
                id: 0,
                title: "Intro To Object Oriented Programming",
                description: "Fundamentals and basics of OOP using Java",
                image: "Possible image here...",
                institution: "Salt Lake Community College"
            },
            {
                id: 1,
                title: "Object Oriented Programming",
                description: "Basics of Object Oriented Programming",
                image: "Possible image here...",
                institution: "University of Utah"
            },
            {
                id: 2,
                title: "Algorithms and Data Structures",
                description: "Dive into sorting algorithms and basic data structures",
                image: "Possible image here...",
                institution: "University of Utah"
            },
            {
                id: 3,
                title: "Web Development",
                description: "Accelerated learning in web development",
                image: "Possible image here...",
                institution: "Bottega"
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