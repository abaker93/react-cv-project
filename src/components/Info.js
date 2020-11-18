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
                        <label htmlFor="name">Your name</label>
                        <input
                            id="name"
                            type="text"
                            onChange={this.handleNameChange}
                        />
                        <label htmlFor="title">Your title</label>
                        <input
                            id="title"
                            type="text"
                            onChange={this.handleTitleChange}
                        />
                        <label htmlFor="profile">Profile</label>
                        <textarea
                            id="profile"
                            onChange={this.handleProfileChange}
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