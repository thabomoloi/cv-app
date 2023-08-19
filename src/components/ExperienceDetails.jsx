import { useState } from "react";

function Experience({
	id,
	company,
	position,
	startDate,
	endDate,
	description,
	handleChange,
	editID,
	handleEditID,
	removeExperience,
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
		removeExperience(id);
		handleEditID(null);
	};

	return editMode && editID == id ? (
		<form action="" key={id} onSubmit={handleSubmit}>
			<div className="form-container">
				<label htmlFor="company">Company</label>
				<input
					type="text"
					name="company"
					id="company"
					value={company}
					required
					onChange={handleChange}
					data-key={id}
				/>
			</div>
			<div className="form-container">
				<label htmlFor="position">Position</label>
				<input
					type="text"
					name="position"
					id="position"
					value={position}
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
				<label htmlFor="description">Main Resposibilities</label>
				<textarea
					name="description"
					id="description"
					value={description}
					cols="30"
					rows="10"
					required
					onChange={handleChange}
					data-key={id}
				></textarea>
			</div>
			<div className="form-container">
				<button type="submit">Save</button>
				<button onClick={handleRemove}>Cancel</button>
			</div>
		</form>
	) : (
		<div className="experience viewMode">
			<p>{company}</p>
			<div className="buttons">
				<button onClick={handleEdit}>Edit</button>
				<button onClick={handleRemove}>Remove</button>
			</div>
		</div>
	);
}

export default Experience;
