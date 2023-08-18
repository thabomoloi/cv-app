import { useState } from "react";

function PersonalDetails({
	fullName,
	email,
	phone,
	address,
	handleChange,
	submitPersonalDetails,
	removePersonalDetails,
}) {
	const [editMode, setEditMode] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		submitPersonalDetails(fullName, email, phone, address);
		setEditMode(false);
	};

	const handleEdit = (event) => {
		setEditMode(true);
	};

	const handleRemove = (event) => {
		setEditMode(true);
		removePersonalDetails();
	};

	return editMode ? (
		<form action="" onSubmit={handleSubmit}>
			<div className="form-container">
				<label htmlFor="fullName">First Name</label>
				<input
					id="fullName"
					type="text"
					value={fullName}
					name="fullName"
					required
					onChange={handleChange}
				/>
			</div>
			<div className="form-container">
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					value={email}
					name="email"
					required
					onChange={handleChange}
				/>
			</div>
			<div className="form-container">
				<label htmlFor="phone">Phone Number</label>
				<input
					type="tel"
					id="phone"
					value={phone}
					name="phone"
					required
					onChange={handleChange}
				/>
			</div>
			<div className="form-container">
				<label htmlFor="address">Address</label>
				<input
					type="text"
					id="address"
					value={address}
					name="address"
					required
					onChange={handleChange}
				/>
			</div>
			<div className="form-container">
				<button className="btn" type="submit">
					Save
				</button>
			</div>
		</form>
	) : (
		<div className="personalDetails viewMode">
			<p>{fullName}</p>
			<p>{email}</p>
			<p>{phone}</p>
			<p>{address}</p>
			<div className="buttons">
				<button onClick={handleEdit}>Edit</button>
				<button className="btn" onClick={handleRemove}>
					Remove
				</button>
			</div>
		</div>
	);
}
