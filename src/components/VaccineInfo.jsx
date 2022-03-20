const VaccineInfo = (props) => {
	return (
		<div class="uk-card uk-card-default uk-align-center uk-width-1-2@m">
			<div class="uk-card-header uk-card-muted ">
				<div class="uk-grid-small uk-flex-middle" uk-grid>
					<ul uk-accordion>
						<li>
							<a class="uk-accordion-title" href="#">
								{props.name}
							</a>
							<div class="uk-accordion-content uk-card-body uk-card-default">
								<p>
									<b>What is {props.name}:</b> {props.infod}{" "}
								</p>
								<p>
									<b>Info about {props.name} Vaccine:</b> {props.infov}{" "}
								</p>
								<p>
									<b>When to get Vaccine:</b> {props.date}
								</p>
								<p>
									<b>Citation(s):</b>
								</p>
								{props.cite.map((c) => (
									<p>{c}</p>
								))}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VaccineInfo;
