import React, { Component } from "react";
import Info from './Info';
import Skills from './Skills';

class Aside extends Component {
    render() {
        return (
            <aside id="Aside">
                <Info />
                <Skills />
            </aside>
        )
    }

}

export default Aside;