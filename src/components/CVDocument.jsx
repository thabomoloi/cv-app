function CVDocument({ personalDetails, education, experience }) {
	return (
		<div className="cv-document">
			<div className="cv-header">
				<h1>{personalDetails.fullName}</h1>
				<p className="contact-details">
					<span>{personalDetails.email}</span>
					<span>{personalDetails.phone}</span>
				</p>
				<p>{personalDetails.address}</p>
			</div>
			<div className="cv-body">
				{education.length != 0 && (
					<section className="education">
						<h2>Education</h2>
						{education.map((item) => {
							return (
								<div key={item.id}>
									<div>
										<p>
											<strong>
												{item.startDate} - {item.endDate}
											</strong>
										</p>
									</div>
									<div>
										<p>
											<strong>{item.school}</strong>
										</p>
										<p>{item.degree}</p>
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
									<div>
										<p>
											<strong>
												{item.startDate} - {item.endDate}
											</strong>
										</p>
									</div>
									<div>
										<p>
											<strong>{item.company}</strong>
										</p>
										<p>{item.position}</p>
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
