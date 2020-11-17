import React, { Component } from "react";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            minor: '',
            gpa: '',
            education: [
                {
                    school: 'Cool University',
                    degree: 'B.S. Web Development',
                    date: 'Aug 2019 - July 2020',
                    location: 'New York City, NY',
                    minor: 'Lorem ipsum dolor',
                    gpa: '4.0'
                }
            ],
            edit: false
        }
    }

    handleSchoolChange = e => {
        this.setState({
            school: e.target.value
        })
    }

    handleDegreeChange = e => {
        this.setState({
            degree: e.target.value
        })
    }

    handleStartDateChange = e => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDateChange = e => {
        this.setState({
            endDate: e.target.value
        })
    }

    handleLocationChange = e => {
        this.setState({
            location: e.target.value
        })
    }

    handleMinorChange = e => {
        this.setState({
            minor: e.target.value
        })
    }

    handleGPAChange = e => {
        this.setState({
            gpa: e.target.value
        })
    }

    onSubmitEducation = e => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                school: this.state.school,
                degree: this.state.degree,
                date: this.state.startDate + ' - ' + this.state.endDate,
                location: this.state.location,
                minor: this.state.minor,
                gpa: this.state.gpa
            })
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        const { edit, education } = this.state;
        
        return (
            <div id="Education">
                <h2>Education</h2>
                {education.map(edu => {
                    return (
                        <div>
                            <div>
                                <p className="education-date">{edu.date}</p>
                                <p className="education-degree">{edu.degree}</p>
                            </div>
                            <div>
                                <p className="education-school">{edu.school}</p>
                                <p className="education-location">{edu.location}</p>
                                <p className="education-minor">minor: {edu.minor}</p>
                                <p className="education-gpa">gpa: {edu.gpa}</p>
                            </div>
                        </div>
                    )
                })}
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="education-add" className="edit-form">
                    <label for="school">School</label>
                    <input
                        id="school"
                        type="text"
                        onChange={this.handleSchoolChange}
                    />
                    <label for="degree">Degree</label>
                    <input
                        id="degree"
                        type="text"
                        onChange={this.handleDegreeChange}
                    />
                    <label for="start-date">Start Date</label>
                    <input
                        id="start-date"
                        type="text"
                        placeholder="Month &amp; Year"
                        onChange={this.handleStartDateChange}
                    />
                    <label for="end-date">End Date</label>
                    <input
                        id="end-date"
                        type="text"
                        placeholder="Month &amp; Year"
                        onChange={this.handleEndDateChange}
                    />
                    <label for="location">Location</label>
                    <input
                        id="location"
                        type="text"
                        onChange={this.handleLocationChange}
                    />
                    <label for="minor">Minor</label>
                    <input
                        id="minor"
                        type="text"
                        onChange={this.handleMinorChange}
                    />
                    <label for="gpa">GPA</label>
                    <input
                        id="gpa"
                        type="text"
                        onChange={this.handleGPAChange}
                    />
                    <button
                        type="button"
                        onClick={this.onSubmitEducation}
                    >
                        Add Education
                    </button>
                    <button
                        type="button"
                        onClick={this.toggleEdit}
                    >
                        Close Add
                    </button>
                </form>
                }
            </div>
        )
    }
}

export default Education;