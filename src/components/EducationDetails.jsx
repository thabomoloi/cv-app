import { useState } from "react";

function Education({
	id,
	school,
	degree,
	startDate,
	endDate,
	handleChange,
	editID,
	handleEditID,
	removeEducation,
}) {
	const [editMode, setEditMode] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		setEditMode(false);
		handleEditID(null);
	};

	const handleEdit = (event) => {
		setEditMode(true);
		handleEditID(id);
	};

	const handleRemove = (event) => {
		removeEducation(id);
		handleEditID(null);
	};

	return editMode && editID == id ? (
		<form action="" key={id} onSubmit={handleSubmit}>
			<div className="form-container">
				<label htmlFor="school">School</label>
				<input
					type="text"
					name="school"
					id="school"
					value={school}
					required
					onChange={handleChange}
					data-key={id}
				/>
			</div>
			<div className="form-container">
				<label htmlFor="degree">Degree</label>
				<input
					type="text"
					name="degree"
					id="degree"
					value={degree}
					required
					onChange={handleChange}
					data-key={id}
				/>
			</div>
			<div className="form-container">
				<label htmlFor="startDate">Start Date</label>
				<input
					type="text"
					name="startDate"
					id="startDate"
					value={startDate}
					required
					onChange={handleChange}
					data-key={id}
				></input>
			</div>
			<div className="form-container">
				<label htmlFor="endDate">End Date</label>
				<input
					type="text"
					name="endDate"
					id="endDate"
					value={endDate}
					required
					onChange={handleChange}
					data-key={id}
				></input>
			</div>
			<div className="form-container">
				<button type="submit">Save</button>
				<button onClick={handleRemove}>Cancel</button>
			</div>
		</form>
	) : (
		<div className="viewMode">
			<p>{school}</p>
			<div className="buttons">
				<button onClick={handleEdit}>Edit</button>
				<button onClick={handleRemove}>Remove</button>
			</div>
		</div>
	);
}

export default Education;
