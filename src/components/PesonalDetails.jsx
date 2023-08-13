import { useState } from "react";

function PersonalInfo(props) {
	const [inputs, setInputs] = useState({});
	const [editMode, setEditMode] = useState(true);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setEditMode(false);
	};

	const handleEdit = (event) => {
		setEditMode(true);
	};

	const EditMode = () => {
		return (
			<form action="" onChange={handleChange} onSubmit={handleSubmit}>
				<div className="form-container">
					<label htmlFor="fullName">First Name</label>
					<input
						id="fullName"
						type="text"
						value={inputs.fullName}
						name="fullName"
						required
					/>
				</div>
				<div className="form-container">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						value={inputs.email}
						name="email"
						required
					/>
				</div>
				<div className="form-container">
					<label htmlFor="phone">Phone Number</label>
					<input
						type="tel"
						id="phone"
						value={inputs.phone}
						name="phone"
						required
					/>
				</div>
				<div className="form-container">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						id="address"
						value={inputs.address}
						name="address"
						required
					/>
				</div>
				<div className="form-container">
					<button type="submit">Save</button>
				</div>
			</form>
		);
	};

	const ViewMode = () => {
		return (
			<div className="personalDetails viewMode">
				<p>{inputs.fullName}</p>
				<p>{inputs.email}</p>
				<p>{inputs.phone}</p>
				<p>{inputs.address}</p>
				<button onClick={handleEdit}>Edit</button>
			</div>
		);
	};

	return editMode ? EditMode() : ViewMode();
}

function Profile(props) {
	const [inputs, setInputs] = useState({});
	const [editMode, setEditMode] = useState(true);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setEditMode(false);
	};

	const handleEdit = (event) => {
		setEditMode(true);
	};

	const EditMode = () => {
		return (
			<form action="" onChange={handleChange} onSubmit={handleSubmit}>
				<div className="form-container">
					<textarea
						name="profile"
						id="profile"
						cols="40"
						rows="5"
						value={inputs.profile}
						required
						placeholder="Write someting about yourself."
					></textarea>
				</div>
				<div className="form-container">
					<button type="submit">Save</button>
				</div>
			</form>
		);
	};

	const ViewMode = () => {
		return (
			<div>
				<p>{inputs.profile}</p>
				<button onClick={handleEdit}>Edit</button>
			</div>
		);
	};
	return editMode ? EditMode() : ViewMode();
}

function PersonalDetails(props) {
	return (
		<div>
			<section>
				<h2>Personal Information</h2>
				<PersonalInfo />
			</section>
			<section>
				<h2>Profile</h2>
				<Profile />
			</section>
		</div>
	);
}

export default PersonalDetails;
