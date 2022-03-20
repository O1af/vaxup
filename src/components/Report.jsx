import axios from "axios";
import VaccineInfo from "./VaccineInfo";
import { useState, useEffect } from "react";
const Checklist = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [vaccines, setVaccines] = useState();
	const body = {
		id: localStorage.getItem("user"),
		firstName: localStorage.getItem("first"),
		middleName: localStorage.getItem("middle"),
		lastName: localStorage.getItem("last"),
		allergies: localStorage.getItem("allergies"),
		birthDate: localStorage.getItem("birthDate"),
		sex: localStorage.getItem("sex"),
	};
	const options = {
		method: "POST",
		url: "https://flask-api-fapey5evqq-uc.a.run.app/SetUserData",
		headers: { "Content-Type": "application/json" },
		data: {
			ID: localStorage.getItem("user"),
			first_name: localStorage.getItem("first"),
			middle_name: localStorage.getItem("middle"),
			last_name: localStorage.getItem("last"),
			bday: localStorage.getItem("birthDate"),
			allergies: localStorage.getItem("vax"),
			sex: localStorage.getItem("sex"),
			history_anaphylaxis: false,
			history_vasovagal_syncope: false,
			immunocompromised: localStorage.getItem("ic"),
		},
	};
	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				setVaccines(response.data);
				setIsLoading(false);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<title>Vaccines Checklist</title>
			<link
				rel="icon"
				href="https://img.icons8.com/office/30/000000/plus.png"
			/>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/css/uikit.min.css"
			/>
			<header>
				{/* Main Navbar */}
				<div className="uk-section-default uk-preserve-color">
					<nav className="uk-container uk-navbar">
						<div className="uk-navbar-left">
							<img
								uk-svg
								src="https://img.icons8.com/office/30/000000/plus.png"
							/>
							<ul className="uk-navbar-nav">
								<li className="uk-active">
									<a className="uk-navbar-item" href>
										<p>VaxxUp</p>
										<p className="uk-text-bold">.Tech</p>
									</a>
								</li>
							</ul>
						</div>
						<div className="uk-navbar-right">
							<ul className="uk-navbar-nav uk-visible@s">
								<li>
									<a className="uk-text-large" href="#">
										Register/Login
									</a>
								</li>
								<li className="uk-active">
									<a className="uk-text-large" href="#/checklist">
										VaxxReport
									</a>
								</li>
								<li>
									<a className="uk-text-large" href="#/form">
										Profile
									</a>
								</li>
								<li>
									<a className="uk-text-large" href="#/about">
										About
									</a>
								</li>
								<li>
									<a className="uk-text-large" href="#/covid">
										Covid
									</a>
								</li>
							</ul>
							<a
								href="#"
								className="uk-navbar-toggle uk-hidden@s"
								uk-navbar-toggle-icon
								uk-toggle="target: #offcanvas-flip"
							/>
						</div>
					</nav>
				</div>
			</header>
			<div
				className="uk-background-default uk-background-cover uk-vertical-align uk-text-center uk-height-large"
				style={{ backgroundImage: "url()" }}
			>
				<br />
				<div className="uk-card uk-card-small uk-card-default uk-align-center uk-width-1-4@m ">
					<div className="uk-card-header">
						<div className="uk-grid-small uk-flex-middle" uk-grid>
							<div className="uk-width-expand">
								<h4 className="uk-card-title uk-margin-remove-bottom">
									{body.firstName} {body.lastName}
								</h4>
								<p>Date of Birth: {body.birthDate}</p>
								<p>Sex: {body.sex}</p>
								<p>Allergies:{body.allergies}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="uk-background-default uk-background-container uk-vertical-align uk-text-center uk-height-large">
				{vaccines.Vaccines.map((vax) => (
					<VaccineInfo
						name={vax.Name}
						infod={vax.dInfo}
						infov={vax.vInfo}
						date={vax.Dates}
						cite={vax.Cite}
					/>
				))}
			</div>
			<div
				id="offcanvas-flip"
				uk-offcanvas="flip: true; mode: reveal; overlay: true"
				className="uk-offcanvas"
			>
				<div className="uk-offcanvas-bar">
					<button className="uk-offcanvas-close" type="button" uk-close />
					<ul className="uk-nav uk-nav-divider">
						<li>
							<a
								className="uk-text-meta uk-text-default uk-text-success"
								href="#"
							>
								Checklist
							</a>
						</li>
						<li>
							<a
								className="uk-text-meta uk-text-default uk-text-success"
								href="#"
							>
								Profile
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Checklist;
