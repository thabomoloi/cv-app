import { useState } from "react";
import uniqid from "uniqid";
import PersonalDetails from "./components/PersonalDetails.jsx";
import Education from "./components/EducationDetails.jsx";
import Experience from "./components/ExperienceDetails.jsx";

function App() {
	const [personalDetails, setPersonalDetails] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: "",
	});

	const [education, setEducation] = useState([]);
	const [experience, setExperience] = useState([]);

	const [educationEditID, setEducationEditID] = useState(null);
	const [experienceEditID, setExperienceEditID] = useState(null);

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
		const id = uniqid();
		setEducation((prevEducation) => [
			...prevEducation,
			{
				id,
				school: "",
				degree: "",
				startDate: "",
				endDate: "",
			},
		]);
		setEducationEditID(id);
	};
	const handleEducationRemove = (key) => {
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
		console.log(key);
		setEducation(educationUpdate);
	};

	const handleExperienceAdd = (event) => {
		const id = uniqid();
		setExperience((prevExperience) => [
			...prevExperience,
			{
				id,
				company: "",
				position: "",
				startDate: "",
				endDate: "",
				description: "",
			},
		]);
		setExperienceEditID(id);
	};
	const handleExperienceRemove = (key) => {
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
				<section className="form details">
					<h2>Personal Details</h2>
					<PersonalDetails
						fullName={personalDetails.fullName}
						email={personalDetails.email}
						phone={personalDetails.phone}
						address={personalDetails.address}
						handleChange={handleDetailsChange}
						removeDetails={handleDetailsRemove}
					/>
				</section>
				<section className="form education">
					<h2>Education</h2>
					{education && (
						<div>
							{education.map((item) => {
								return (
									<Education
										key={item.id}
										id={item.id}
										school={item.school}
										degree={item.degree}
										startDate={item.startDate}
										endDate={item.endDate}
										description={item.description}
										handleChange={handleEducationChange}
										editID={educationEditID}
										handleEditID={(id) => setEducationEditID(id)}
										removeEducation={handleEducationRemove}
									/>
								);
							})}
						</div>
					)}
					{educationEditID == null && (
						<button onClick={handleEducationAdd}>Add Education</button>
					)}
				</section>
				<section className="form experience">
					<h2>Experience</h2>
					{experience && (
						<div>
							{experience.map((item) => {
								return (
									<Experience
										key={item.id}
										id={item.id}
										company={item.company}
										startDate={item.startDate}
										endDate={item.endDate}
										description={item.description}
										handleChange={handleExperienceChange}
										editID={experienceEditID}
										handleEditID={(id) => setExperienceEditID(id)}
										removeExperience={handleExperienceRemove}
									/>
								);
							})}
						</div>
					)}
					{experienceEditID == null && (
						<button onClick={handleExperienceAdd}>Add Experience</button>
					)}
				</section>
			</div>
			<div>
				<div className="cv-document">
					<div className="cv-header">
						<h1>{personalDetails.fullName}</h1>
						<p className="contact-details">
							<span>{personalDetails.email}</span>
							<span>{personalDetails.phone}</span>
						</p>
						<p>{personalDetails.address}</p>
					</div>
					<div className="cv-body"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
