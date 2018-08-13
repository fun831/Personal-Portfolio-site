import React, { Component } from 'react';

class Course extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="course">
                <div className='title'>{this.props.title}</div>
                <div className='institution'>{this.props.institution}</div>
                <div className='description'>{this.props.description}</div>                                
            </div>
        );
    }
}
export default Course;