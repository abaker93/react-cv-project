import React, { Component } from "react";

class Info extends Component {
    render() {
        return (
            <div id="Info">
                <div className="header">Resume</div>
                <div id="profile-photo" />
                <div className="address">
                    <h2>Address</h2>
                    <p>123 Address St</p>
                    <p>City, ST 55555</p>
                </div>
                <div className="phone">
                    <h2>Phone</h2>
                    <p>555-555-5555</p>
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <p>info@website.com</p>
                </div>
                <div className="online">
                    <h2>Online</h2>
                    <p>website.com</p>
                    <p>linkedin.com/in/user-name</p>
                </div>
            </div>
        )
    }

}

export default Info;