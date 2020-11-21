import React, { Component } from "react";

class Info extends Component {
    constructor() {
        super();

        this.state = {
            address1: '',
            address2: '',
            phone: '',
            email: '',
            website: '',
            linkedin: '',
            edit: false
        }
    }

    handleAddress1Change = e => {
        this.setState({
            address1: e.target.value
        })
    }

    handleAddress2Change = e => {
        this.setState({
            address2: e.target.value
        })
    }

    handlePhoneChange = e => {
        this.setState({
            phone: e.target.value
        })
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    handleWebsiteChange = e => {
        this.setState({
            website: e.target.value
        })
    }

    handleLinkedinChange = e => {
        this.setState({
            linkedin: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        const { address1, address2, phone, email, website, linkedin, edit } = this.state;

        return (
            <div id="Info">
                <div className="header">Resume</div>
                <div id="profile-photo" />
                <div className="address">
                    <h2>Address</h2>
                    <p>{address1 ? address1 : '123 Address St'}</p>
                    <p>{address2 ? address2 : 'City, ST 55555'}</p>
                </div>
                <div className="phone">
                    <h2>Phone</h2>
                    <p>{phone ? phone : '555-555-5555'}</p>
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <p>{email ? email : 'info@website.com'}</p>
                </div>
                <div className="online">
                    <h2>Online</h2>
                    <p>{website ? website : 'website.com'}</p>
                    <p>linkedin.com/in/{linkedin ? linkedin : 'user-name'}</p>
                </div>
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>

                {edit &&
                    <form id="intro-edit" className="edit-form">
                        <label htmlFor="address1">Address</label>
                        <input
                            id="address1"
                            type="text"
                            placeholder="123 Address St"
                            onChange={this.handleAddress1Change}
                        />
                        <label htmlFor="address2">City, State, & Zip Code</label>
                        <input
                            id="address2"
                            type="text"
                            placeholder="City, ST 55555"
                            onChange={this.handleAddress2Change}
                        />
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="text"
                            onChange={this.handlePhoneChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            onChange={this.handleEmailChange}
                        />
                        <label htmlFor="website">Website</label>
                        <input
                            id="website"
                            type="text"
                            onChange={this.handleWebsiteChange}
                        />
                        <label htmlFor="linkedin">LinkedIn Username</label>
                        <input
                            id="linkedin"
                            type="text"
                            onChange={this.handleLinkedinChange}
                        />
                        <button
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close Edit
                        </button>
                    </form>
                }
            </div>
        )
    }

}

export default Info;