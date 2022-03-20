import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
const VaxForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [lastName, setLastName] = useState("");
	const [allergies, setAllergies] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [vax, setVax] = useState("");
	const [sex, setSex] = useState("");
	const [comprimised, setComprimised] = useState(false);
	const [submit, setSubmit] = useState(false);
	console.log(props.user);
	useEffect(() => {
		if (submit) {
			const user = {
				first: firstName,
				middle: middleName,
				last: lastName,
				allergic: allergies,
				bday: birthDate,
				sx: sex,
			};
			localStorage.setItem("first", firstName);
			localStorage.setItem("middle", middleName);
			localStorage.setItem("last", lastName);
			localStorage.setItem("allergies", allergies);
			localStorage.setItem("birthDate", birthDate);
			localStorage.setItem("sex", sex);
			localStorage.setItem("vax", vax);
			localStorage.setItem("ic", comprimised);
			setSubmit(false);
		}
	}, [submit]);
	if (submit) {
		return <Navigate to="/checklist" />;
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
										VaxUp.<strong>tech</strong>
									</a>
								</li>
							</ul>
						</div>
						<div className="uk-navbar-right">
							<ul className="uk-navbar-nav uk-visible@s">
								<li>
									<a className="uk-text-large" href="/">
										Register/Login
									</a>
								</li>
								<li>
									<a className="uk-text-large" href="/checklist">
										Checklist
									</a>
								</li>
								<li className="uk-active">
									<a className="uk-text-large" href="/form">
										Profile
									</a>
								</li>
								<li>
									<a className="uk-text-large" href="/about">
										About
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
			<div className="uk-align-center">
				<form
					className="uk-form-width-large uk-align-center"
					onSubmit={(e) => {
						e.preventDefault();
						setSubmit(true);
					}}
				>
					<fieldset className="uk-fieldset">
						<b>
							<legend className="uk-legend">Profile Settings</legend>
						</b>
						<div className="uk-margin">
							<label className="uk-form-label" htmlFor="form-horizontal-text">
								First Name
							</label>
							<input
								className="uk-input"
								type="text"
								placeholder="First Name"
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className="uk-margin">
							<label className="uk-form-label" htmlFor="form-horizontal-text">
								Middle Name
							</label>
							<input
								className="uk-input"
								type="text"
								placeholder="Middle Name"
								onChange={(e) => setMiddleName(e.target.value)}
							/>
						</div>
						<div className="uk-margin">
							<label className="uk-form-label" htmlFor="form-horizontal-text">
								Last Name
							</label>
							<input
								className="uk-input"
								type="text"
								placeholder="Last Name"
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
						<div className="uk-margin">
							<label className="uk-form-label" htmlFor="form-horizontal-text">
								Allergies
							</label>
							<input
								className="uk-input"
								type="text"
								placeholder="Separate by comma (nuts, eggs)"
								onChange={(e) => setAllergies(e.target.value)}
							/>
						</div>
						<div className="uk-margin">
							<label className="uk-form-label" htmlFor="form-horizontal-text">
								Date of Birth
							</label>
							<br />
							<div className="uk-inline">
								<span className="uk-form-icon" uk-icon="icon: calendar" />
								<input
									className="uk-input"
									type="text"
									data-uk-datepicker="{format:'MM.DD.YYYY'}"
									placeholder="MM/DD/YYYY"
									onChange={(e) => setBirthDate(e.target.value)}
								/>
							</div>
						</div>
						<div className="uk-margin">
							<label className="uk-form-label" htmlFor="form-horizontal-select">
								Select Sex
							</label>
							<div className="uk-form-controls">
								<select
									className="uk-select"
									id="form-horizontal-select"
									onChange={(e) => setSex(e.target.value)}
								>
									<option hidden disabled selected value></option>
									<option>Male</option>
									<option>Female</option>
								</select>
							</div>
						</div>
						<div class="uk-margin">
							<p>
								Please Write the vaccine abbreviation below if you have had any
								allergic reactions to any vaccines:{" "}
							</p>{" "}
							<p>
								EX: Hepatitis B (HepB) Rotavirus (RV), Diphtheria Tetanus
								Acellular Pertussis (DTaP), Measles Mumps Rubella (MMR),
								Haemophilus Influenzae Type B (Hib), Pneumococcal Conjugate
								Vaccine (PCV13), Inactivated Polio Vaccine (IPV), Varicella
								(VAR), Human Papillomavirus (HPV), Meningitis ACYW (MenACYW),
								Hepatitis A (HepA)
							</p>
							<input
								className="uk-input"
								type="text"
								placeholder="Vax Name Separated by a comma (nuts, eggs)"
								onChange={(e) => setVax(e.target.value)}
							/>
						</div>
						<div className="uk-margin">
							<label className="uk-form-label" htmlFor="form-horizontal-select">
								Are You Immunocomprimised?
							</label>
							<div className="uk-form-controls">
								<select
									className="uk-select"
									id="form-horizontal-select"
									onChange={(e) => setComprimised(e.target.value)}
								>
									<option hidden disabled selected value></option>
									<option>Yes</option>
									<option>No</option>
								</select>
							</div>
						</div>
						<div className="uk-margin">
							<button class="uk-button uk-button-primary" type="submit">
								Submit
							</button>
						</div>
					</fieldset>
				</form>
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
								Login/Register
							</a>
						</li>
						<li>
							<a
								className="uk-text-meta uk-text-default uk-text-success"
								href="#"
							>
								About
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default VaxForm;
