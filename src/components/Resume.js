import React, { Component } from "react";
import Aside from './Aside';
import Intro from './Intro';
import Education from './Education';
import Experience from './Experience';

class Resume extends Component {
    render() {
        return (
            <div id="Resume">
                <Aside />
                <main>
                    <Intro />
                    <Education />
                    <Experience />
                </main>
            </div>
        )
    }

}

export default Resume;