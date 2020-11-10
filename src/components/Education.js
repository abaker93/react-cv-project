import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <div id="Education">
                <h2>Education</h2>
                <div>
                    <div>
                        <p class="education-date">Aug 2019 - July 2020</p>
                        <p class="education-degree">B.S. Web Development</p>
                    </div>
                    <div>
                        <p class="education-school">Cool University</p>
                        <p class="education-location">New York City, NY</p>
                        <p class="education-minor">Minor: Lorem ipsum dolor</p>
                        <p class="education-gpa">GPA: 4.0</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;