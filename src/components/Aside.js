import React, { Component } from "react";
import logo from '../img/logo.jpg';

class Aside extends Component {
    render() {
        return (
            <aside id="aside">
                <header>
                    <img src={logo} alt="logo" class="logo" />
                    <div class="details">
                        <h1 class="jobTitle">Web Developer</h1>
                        <p class="company">Design Company, Inc.</p>
                        <p class="location">Pittsburgh, PA</p>
                    </div>
                </header>
                <main>
                    <p>We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom up, fashioning everything from the home page to site layout and function.</p>
                    <h2>Responsibilities</h2>
                    <ul>
                        <li>Write well designed, testable, efficient code by using best software development practices</li>
                        <li>Create website layout/user interface by using standard HTML/CSS practices</li>
                        <li>Integrate data from various back-end services and databases</li>
                        <li>Gather and refine specifications and requirements based on technical needs</li>
                        <li>Create and maintain software documentation</li>
                        <li>Be responsibile for maintaining, expanding, and scaling our site</li>
                        <li>Stay plugged into emerging technologies/industry trends and apply them into operations and activities</li>
                        <li>Cooperate with web designers to match visual design intent</li>
                    </ul>
                    <h2>Requirements</h2>
                    <ul>
                        <li>Proven working experience in web programming</li>
                        <li>Top-notch programming skills and in-depth knowledge of modern HTML/CSS</li>
                        <li>Familiarity with at least one of the following programming languages: PHP, ASP.NET, Javascript or Ruby on Rails</li>
                        <li>A solid understanding of how web applications work including security, session management, and best development practices</li>
                        <li>Adequate knowledge of relational database systems, Object Oriented Programming and web application development</li>
                        <li>Hands-on experience with network diagnostics, network analytics tools</li>
                        <li>Basic knowledge of Search Engine Optimization process</li>
                        <li>Aggressive problem diagnosis and creative problem solving skills</li>
                        <li>Strong organizational skills to juggle multiple tasks within the constraints of  timelines and budgets with business acumen</li>
                        <li>Ability to work and thrive in a fast-paced environment, learn rapidly and master diverse web technologies and techniques.</li>
                        <li>BS in computer science or a related field</li>
                    </ul>
                </main>
            </aside>
        )
    }
}

export default Aside;