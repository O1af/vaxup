import GoogleLoginButton from "./components/GoogleLoginButton";
import Checklist from "./components/Report";
import VaxForm from "./components/VaxForm";
import About from "./components/About";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Covid from "./components/Covid";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="checklist" element={<Checklist />} />
				<Route path="/checklist" element={<Checklist />} />
				<Route path="form" element={<VaxForm />} />
				<Route path="covid" element={<Covid />} />
			</Routes>
		</div>
	);
}

// App.js
function Home() {
	return (
		<>
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
									<li className="uk-active">
										<a className="uk-text-large" href="#">
											Register/Login
										</a>
									</li>
									<li>
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
					className="uk-background-fixed uk-background-cover uk-background-blend-multiply uk-background-muted uk-vertical-align uk-text-center uk-height-large"
					style={{
						backgroundImage:
							"url(https://formwebdesign.ca/wp-content/uploads/2019/04/blue-green-swirl-abstract-background.jpg)",
					}}
				>
					<div className="uk-vertical-align-middle">
						<br />
						<br />
						<br />
						<h2 className="uk-heading-large">Welcome</h2>
						<p className="uk-text-large uk-text-center">
							To get started, click the button below
						</p>
						<p>
							<GoogleLoginButton></GoogleLoginButton>
						</p>
					</div>
				</div>
				<div className="uk-align-center">
					<div className="uk-card uk-card-default uk-width-1-2@m uk-align-center">
						<div className="uk-card-header">
							<div className="uk-grid-small uk-flex-middle" uk-grid>
								<div className="uk-width-expand">
									<h3 className="uk-card-title uk-margin-remove-bottom uk-text-primary uk-text-bold">
										Additional Info
									</h3>
								</div>
							</div>
						</div>
						<div className="uk-card-body uk-margin-remove-bottom">
							<p>
								We at VaxUp understand that it is challenging to navigate the
								complex medical information regarding vaccination. This is even
								more difficult given the misinformation regarding vaccines in
								circulation. Thus, we included some additional credible sources
								that provide a greater understanding of vaccinations.
							</p>
						</div>
						<div className="uk-card-footer uk-margin-remove-top uk-text-bold">
							<a href="https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html">
								CDC Vaccine Schedule
							</a>
							<br />
							<a href="https://www.mayoclinic.org/">
								Descriptions of Vaccine-Preventable Diseases
							</a>
							<br />
							<a href="https://www.historyofvaccines.org/timeline/all">
								Vaccine History
							</a>
							<br />
							<a href="https://coronavirus.jhu.edu/vaccines/vaccines-faq">
								How Vaccines Work
							</a>
							<br />
							General Resources:{" "}
							<a href="https://www.who.int/health-topics/vaccines-and-immunization">
								World Health Organization,
							</a>
							<a href="https://www.vaccines.gov/">vaccines.gov</a>
							<p />
						</div>
					</div>
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
									href="/"
								>
									Login/Register
								</a>
							</li>
							<li>
								<a
									className="uk-text-meta uk-text-default uk-text-success"
									href="/about"
								>
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
