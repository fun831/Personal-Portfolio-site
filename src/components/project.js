import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a href={this.props.link} target='_blank' className="project">
                <div className='title'>{this.props.title}</div>
                <div className='institution'>{this.props.institution}</div>
                <div className='description'>{this.props.description}</div>
                <div>Click here to check out the site!</div>                                
            </a>
        );
    }
}
export default Project;