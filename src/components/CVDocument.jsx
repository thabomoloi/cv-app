function CVDocument({ personalDetails, education, experience }) {
	const cvStyle = {
		width: "8.27in",
		height: "11.69",
		backgroundColor: "white",
		color: "#213547",
		fontSize: "12pt",
	};
	const headerStyle = {
		color: "white",
		backgroundColor: "#0c4a6e",
		padding: "0.5in 1in",
		textAlign: "center",
	};
	return (
		<div className="cv-document" style={cvStyle}>
			<div className="cv-header" style={headerStyle}>
				<h1 style={{ margin: "0" }}>{personalDetails.fullName}</h1>
				<p
					className="contact-details"
					style={{
						margin: "0.5em",
						display: "flex",
						justifyContent: "center",
						fontWeight: 500,
					}}
				>
					<span
						style={{ borderRight: "1px solid white", paddingRight: "0.75rem" }}
					>
						{personalDetails.email}
					</span>
					<span style={{ paddingLeft: "1rem" }}>{personalDetails.phone}</span>
				</p>
				<p style={{ margin: "0.5em" }}>{personalDetails.address}</p>
			</div>
			<div
				className="cv-body"
				style={{
					padding: "0.25in 1in 1in 1in",
				}}
			>
				{education.length != 0 && (
					<section className="education">
						<h2>Education</h2>
						{education.map((item) => {
							return (
								<div key={item.id}>
									<div className="date">
										<p>
											<strong>
												{item.startDate} - {item.endDate}
											</strong>
										</p>
									</div>
									<div>
										<p>
											<strong>{item.degree}</strong>
										</p>
										<p>
											<em>{item.school}</em>
										</p>
									</div>
								</div>
							);
						})}
					</section>
				)}
				{experience.length != 0 && (
					<section className="experience">
						<h2>Experience</h2>
						{experience.map((item) => {
							return (
								<div key={item.id}>
									<div className="date">
										<p>
											<strong>
												{item.startDate} - {item.endDate}
											</strong>
										</p>
									</div>
									<div>
										<p>
											<strong>{item.position}</strong>, <em>{item.company}</em>
										</p>
										<p>{item.description}</p>
									</div>
								</div>
							);
						})}
					</section>
				)}
			</div>
		</div>
	);
}

export default CVDocument;
