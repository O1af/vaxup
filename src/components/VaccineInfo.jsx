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
									What is {props.name}: {props.infod}{" "}
								</p>
								<p>
									Info about {props.name}: {props.infov}{" "}
								</p>
								<p>When to get Vaccine: {props.date}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VaccineInfo;
