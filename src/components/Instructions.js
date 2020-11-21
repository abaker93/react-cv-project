import React, { Component } from "react";

class Instructions extends Component {
    constructor() {
        super();

        this.state = {
            instructions: true
        }
    }

    toggleInstructions = () => {
        this.setState(prevState => ({
            instructions: !prevState.instructions
        }))
    }

    render() {
        return (
            <div>
                {this.state.instructions &&
                    <div id="Instructions">
                        <div className="container">
                            <h2>Instructions</h2>
                            <ul>
                                <li>Hover over the areas of the resume to find Edit and Add buttons</li>
                                <li>Edit your information in the form fields and submit your edits</li>
                                <li>Add your Education and Experience or click on entries to remove them</li>
                                <li>When your done editing, use <code>CTRL</code> + <code>P</code> (<code>CMND</code> + <code>P</code> on a Mac) to print your resume to pdf</li>
                            </ul>

                            <button
                                type="button"
                                onClick={this.toggleInstructions}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                }
            </div>
            
        )
    }

}

export default Instructions;