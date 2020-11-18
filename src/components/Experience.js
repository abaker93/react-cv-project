import React, { Component } from "react";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            edit: false
        };
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        return (
            <div id="Experience">
                <h2>Experience</h2>
                <div>
                    <div>
                        <p className="experience-date">Aug 2019 - July 2020</p>
                        <p className="experience-title">Senior Web Developer</p>
                    </div>
                    <div>
                        <p className="experience-company">Super Awesome Web Company</p>
                        <p className="experience-location">New York City, NY</p>
                        <p className="experience-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="experience-date">Nov 2016 - Aug 2019</p>
                        <p className="experience-title">Junior Web Developer</p>
                    </div>
                    <div>
                        <p className="experience-company">Another Web Company</p>
                        <p className="experience-location">New York City, NY</p>
                        <p className="experience-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>
            </div>
        )
    }

}

export default Experience;