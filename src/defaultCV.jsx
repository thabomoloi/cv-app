import uniqid from "uniqid";

function generateDefaultCV() {
	const personalDetails = {
		fullName: "John Smith",
		email: "john.smith@email.com",
		phone: "(123) 456-7890",
		address: "123 Main Street, Cityville, State 12345",
	};

	const education = [
		{
			id: uniqid(),
			school: "University of Citytown",
			degree: "Bachelor of Science in Computer Science",
			startDate: "September 2015",
			endDate: "May 2019",
		},
		{
			id: uniqid(),
			school: "Cityville High School",
			degree: "High School Diploma",
			startDate: "September 2011",
			endDate: "June 2015",
		},
	];

	const experience = [
		{
			id: uniqid(),
			company: "TechCorp Solutions",
			position: "Software Engineer",
			startDate: "June 2019",
			endDate: "Present",
			description:
				"Develop and maintain software applications for clients in various industries." +
				"Collaborate with cross-functional teams to design and implement new features." +
				"Troubleshoot and debug issues to ensure optimal software performance." +
				"Participate in code reviews to ensure code quality and adherence to best practices.",
		},
		{
			id: uniqid(),
			company: "WebGenius Marketing",
			position: "Digital Marketing Specialist",
			startDate: "January 2018",
			endDate: "May 2019",
			description:
				"Managed and executed digital marketing campaigns for clients, including social media, email, and SEO strategies." +
				"Conducted market research and analyzed data to optimize campaign performance and ROI." +
				"Created engaging and relevant content for various online platforms." +
				"Monitored and reported on key metrics to clients, providing insights for campaign improvement",
		},
	];
	return { personalDetails, education, experience };
}

export default generateDefaultCV;
