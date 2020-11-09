import React, { Component } from "react";
import Aside from './components/Aside';
import CV from './components/CV';
import "./styles/styles.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			firstName: '',
			lastName: '',
			title: '',
			location: '',
			email: '',
			phone: '',
			website: '',
			linkedin: '',
		}
	}

	firstNameChange = e => {
		this.setState({
			firstName: e.target.value,
		})
	}

	lastNameChange = e => {
		this.setState({
			lastName: e.target.value,
		})
	}

	titleChange = e => {
		this.setState({
			title: e.target.value,
		})
	}

	locationChange = e => {
		this.setState({
			location: e.target.value,
		})
	}

	emailChange = e => {
		this.setState({
			email: e.target.value,
		})
	}

	phoneChange = e => {
		this.setState({
			phone: e.target.value,
		})
	}

	websiteChange = e => {
		this.setState({
			website: e.target.value,
		})
	}

	linkedinChange = e => {
		this.setState({
			linkedin: e.target.value,
		})
	}

	render() {
		const {
			firstName,
			lastName,
			title,
			location,
			email,
			phone,
			website,
			linkedin
		} = this.state

		return (
			<div id="App">
				<Aside />
				<main id="main">
					<form>
						<fieldset>
							<h3>Contact Information</h3>

							<div>
								<label for="form-firstName">First Name</label>
								<input
									id="form-firstName"
									type="text"
									onChange={this.firstNameChange}
								/>
							</div>

							<div>
								<label for="form-lastName">Last Name</label>
								<input
									id="form-lastName"
									type="text"
									onChange={this.lastNameChange}
								/>
							</div>

							<div>
								<label for="form-title">Title</label>
								<input
									id="form-title"
									type="text"
									onChange={this.titleChange}
								/>
							</div>

							<div>
								<label for="form-location">Location</label>
								<input
									id="form-location"
									type="text"
									placeholder="City, ST"
									onChange={this.locationChange}
								/>
							</div>

							<div>
								<label for="form-email">Email</label>
								<input
									id="form-email"
									type="email"
									placeholder="email@website.com"
									onChange={this.emailChange}
								/>
							</div>

							<div>
								<label for="form-phone">Phone Number</label>
								<input
									id="form-phone"
									type="tel"
									placeholder="555-555-5555"
									onChange={this.phoneChange}
								/>
							</div>

							<div>
								<label for="form-website">Website</label>
								<input
									id="form-website"
									type="text"
									placeholder="website.com"
									onChange={this.websiteChange}
								/>
							</div>

							<div>
								<label for="form-linkedIn">LinkedIn</label>
								<input
									id="form-linkedIn"
									type="text"
									placeholder="linkedin.com/in/user-name"
									onChange={this.linkedinChange}
								/>
							</div>
						</fieldset>
						<fieldset>
							<h3>Education</h3>

							<div>
								<label for="form-school-name">School Name</label>
								<input
									id="form-school-name"
									type="text"
									onChange={this.schoolNameChange}
								/>
							</div>

							<div>
								<label for="form-school-degree">Degree</label>
								<input
									id="form-school-degree"
									type="text"
									onChange={this.degreeChange}
								/>
							</div>

							<div>
								<label for="form-school-startDate">Start Date</label>
								<input
									id="form-school-startDate"
									type="date"
									onChange={this.schoolStartDateChange}
								/>
							</div>

							<div>
								<label for="form-school-endDate">End Date</label>
								<input
									id="form-school-endDate"
									type="date"
									onChange={this.schoolDateChange}
								/>
							</div>

							<div>
								<label for="form-school-location">Location</label>
								<input id="form-school-location" type="text" />
							</div>

							<div>
								<label for="form-school-minor">Minor</label>
								<input id="form-school-minor" type="text" />
							</div>

							<div>
								<label for="form-school-gpa">GPA</label>
								<input id="form-school-gpa" type="text" />
							</div>

							<div class="buttonContainer">
								<button id="form-addEducation" type="button">+ Add Education</button>
							</div>
						</fieldset>
						{/* <fieldset>
							<h3>Experience</h3>

							<div>
								<label for="form-work-name">Company Name</label>
								<input id="form-work-name" type="text" />
							</div>

							<div>
								<label for="form-work-title">Title</label>
								<input id="form-work-title" type="text" />
							</div>

							<div>
								<label for="form-work-startDate">Start Date</label>
								<input id="form-work-startDate" type="date" />
							</div>

							<div>
								<label for="form-work-endDate">End Date</label>
								<input id="form-work-endDate" type="date" />
							</div>

							<div>
								<label for="form-work-location">Location</label>
								<input id="form-work-location" type="text" />
							</div>

							<div>
								<label for="form-work-description">Description</label>
								<textarea id="form-work-description" />
							</div>

							<div class="buttonContainer">
								<button id="form-addWork" type="button">+ Add Work</button>
							</div>
						</fieldset> */}
						<button
							id="form-submit"
							type="button"
						>
							Create CV &gt;
						</button>
					</form>
				</main>
				<CV
					firstName={firstName}
					lastName={lastName}
					title={title}
					location={location}
					email={email}
					phone={phone}
					website={website}
					linkedin={linkedin}
				/>
			</div>
		)
	}
}

export default App;