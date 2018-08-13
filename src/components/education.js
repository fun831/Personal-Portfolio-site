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
            },
            {
                id: 4,
                title: "Finish Carpentry",
                description: "Mostly on the job learning with some formal education in woodwork.",
                image: "Possible image here...",
                institution: "Various"
            },
            {
                id: 5,
                title: "Basic Automotive & Mechanics",
                description: "High School class and father who did many repairs as I watched",
                image: "Possible image here...",
                institution: "Skyline High & Life"
            },
            {
                id: 6,
                title: "Mechanic",
                description: "Experience at the Airport diagnosing and fixing the cleaning equipment.",
                image: "Possible image here...",
                institution: "SLC Airport"
            },
            {
                id: 7,
                title: "Calculus 1-3",
                description: "Calculus 1, 2, 3 ",
                image: "Possible image here...",
                institution: "SLCC, U of U"
            },
            {
                id: 8,
                title: "Digital Electronics",
                description: "Circuit design class",
                image: "Possible image here...",
                institution: "U of U"
            },
        ]
        return (
            <div className="education">
                <Navbar/>
                <div className='education-content'>
                    <h1>Education and Skills</h1>
                    <div className='courses'>
                        {this.courses.map((course) => {
                            return <Course key={course.id} {...course}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default Education;