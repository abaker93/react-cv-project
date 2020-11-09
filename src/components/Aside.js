import React, { Component } from "react";
import logo from '../img/logo.jpg';

class Aside extends Component {
    render() {
        return (
            <aside id="aside">
                <header>
                    <img src={logo} alt="logo" class="logo" />
                    <div class="details">
                        <h1 class="jobTitle">CV Creator</h1>
                    </div>
                </header>
                <main>
                    <p>Create your CV right here without the need of any word processing software. Just follow the simple steps below to create your printable CV.</p>
                    <h2>Steps</h2>
                    <ol>
                        <li>Fill in the information to the right</li>
                        <li>Add additional education or work experience using the "Add" buttons below each section</li>
                        <li>Click "Create CV"</li>
                        <li>Print your CV or save it as a PDF and email to all your prospects</li>
                    </ol>
                </main>
                <footer>
                    <p>&copy; 2020 <a href="http://annabaker.design" target="blank">Anna Baker Design</a></p>
                    <p>Created using React JS</p>
                </footer>
            </aside>
        )
    }
}

export default Aside;