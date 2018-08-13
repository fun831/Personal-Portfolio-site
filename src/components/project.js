import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="project">
                <div className='title'>{this.props.title}</div>
                <div className='institution'>{this.props.institution}</div>
                <div className='description'>{this.props.description}</div>
                <a href={this.props.link} target="blank">Click here to check out the site!</a>                                
            </div>
        );
    }
}
export default Project;