import React, { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <div id="Experience">
                <h2>Experience</h2>
                <div>
                    <div>
                        <p class="experience-date">Aug 2019 - July 2020</p>
                        <p class="experience-title">Senior Web Developer</p>
                    </div>
                    <div>
                        <p class="experience-company">Super Awesome Web Company</p>
                        <p class="experience-location">New York City, NY</p>
                        <p class="experience-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p class="experience-date">Nov 2016 - Aug 2019</p>
                        <p class="experience-title">Junior Web Developer</p>
                    </div>
                    <div>
                        <p class="experience-company">Another Web Company</p>
                        <p class="experience-location">New York City, NY</p>
                        <p class="experience-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Experience;