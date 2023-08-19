import { useState } from "react";
import uniqid from "uniqid";
import PersonalDetails from "./components/PersonalDetails.jsx";

function App() {
	const [personalDetails, setPersonalDetails] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: "",
	});

	const [education, setEducation] = useState([]);
	const [experience, setExperience] = useState([]);

	const handleDetailsChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setPersonalDetails((values) => ({ ...values, [name]: value }));
	};
	const handleDetailsRemove = () => {
		setPersonalDetails({
			fullName: "",
			email: "",
			phone: "",
			address: "",
		});
	};
	const handleEducationAdd = (event) => {
		const { school, degree, startDate, endDate } = event.target.elements;
		setEducation((prevEducation) => [
			...prevEducation,
			{
				id: uniqid(),
				school: school.value,
				degree: degree.value,
				startDate: startDate.value,
				endDate: endDate.value,
			},
		]);
	};
	const handleEducationRemove = (event) => {
		const { key } = event.target.dataset;
		const updatedEducation = education.filter((item) => item.id != key);
		setEducation(updatedEducation);
	};
	const handleEducationChange = (event) => {
		const { name, value } = event.target;
		const { key } = event.target.dataset;
		const educationUpdate = education.map((item) => {
			if (item.id == key) {
				return { ...item, [name]: value };
			}
			return { ...item };
		});
		setEducation(educationUpdate);
	};

	const handleExperienceAdd = (event) => {
		const { company, position, startDate, endDate, description } =
			event.target.elements;
		setExperience((prevExperience) => [
			...prevExperience,
			{
				id: uniqid(),
				company: company.value,
				position: position.value,
				startDate: startDate.value,
				endDate: endDate.value,
				description: description.value,
			},
		]);
	};
	const handleExperienceRemove = (event) => {
		const { key } = event.target.dataset;
		const updatedExperience = experience.filter((item) => item.id != key);
		setExperience(updatedExperience);
	};
	const handleExperienceChange = (event) => {
		const { name, value } = event.target;
		const { key } = event.target.dataset;
		const experienceUpdate = experience.map((item) => {
			if (item.id == key) {
				return { ...item, [name]: value };
			}
			return { ...item };
		});
		setExperience(experienceUpdate);
	};

	return (
		<div>
			<div>
				<PersonalDetails
					fullName={personalDetails.fullName}
					email={personalDetails.email}
					phone={personalDetails.phone}
					address={personalDetails.address}
					handleChange={handleDetailsChange}
					removeDetails={handleDetailsRemove}
				/>
			</div>
			<div>
				<div className="cv-document">
					<div className="cv-header">
						<h1>{personalDetails.fullName}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
