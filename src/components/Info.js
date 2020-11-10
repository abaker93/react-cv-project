import React, { Component } from "react";

class Info extends Component {
    render() {
        return (
            <div id="Info">
                <div class="header">Resume</div>
                <div id="profile-photo" />
                <div class="address">
                    <h2>Address</h2>
                    <p>123 Address St</p>
                    <p>City, ST 55555</p>
                </div>
                <div class="phone">
                    <h2>Phone</h2>
                    <p>555-555-5555</p>
                </div>
                <div class="email">
                    <h2>Email</h2>
                    <p>info@website.com</p>
                </div>
                <div class="online">
                    <h2>Online</h2>
                    <p>website.com</p>
                    <p>linkedin.com/in/user-name</p>
                </div>
            </div>
        )
    }

}

export default Info;