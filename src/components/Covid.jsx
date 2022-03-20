const Covid = () => {
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
										<p>VaxUp</p>
										<p className="uk-text-bold">.Tech</p>
									</a>
								</li>
							</ul>
						</div>
						<div className="uk-navbar-right">
							<ul className="uk-navbar-nav uk-visible@s">
								<li>
									<a className="uk-text-large" href="vaxup#">
										Register/Login
									</a>
								</li>
								<li>
									<a className="uk-text-large" href="vaxup#/checklist">
										Checklist
									</a>
								</li>
								<li>
									<a className="uk-text-large" href="vaxup#/form">
										Profile
									</a>
								</li>
								<li>
									<a className="uk-text-large" href="vaxup#/about">
										About
									</a>
								</li>
								<li className="uk-active">
									<a className="uk-text-large" href="vaxup#/covid">
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
			<div>
				<div className="uk-card uk-card-default uk-width-1-2@m uk-align-center">
					<div className="uk-card-header">
						<div className="uk-grid-small uk-flex-middle" uk-grid>
							<div className="uk-width-expand">
								<h3 className="uk-card-title uk-margin-remove-bottom uk-text-danger uk-text-bold">
									COVID-19
								</h3>
							</div>
						</div>
					</div>
					<div className="uk-card-body">
						<p>
							COVID-19 Vaccines are the best way to prevent the coronavirus.{" "}
							<br />
							According to the CDC, "A growing body of evidence shows that the
							benefits of COVID-19 vaccination outweigh the known and potential
							risks. CDC recommends an mRNA COVID-19 vaccine (Pfizer-BioNTech or
							Moderna) in most circumstances based on an updated risk-benefit
							analysis."
						</p>
					</div>
				</div>
				<div className="uk-card uk-card-default uk-width-1-2@m uk-align-center">
					<div className="uk-card-body">
						<h3 className="uk-card-title uk-margin-remove-bottom uk-text-success">
							Find COVID-19 Vaccine Appointments at your local pharmacy
						</h3>
						<br />
						<a href="https://www.walgreens.com/topic/promotion/covid-vaccine.jsp">
							Walgreens
						</a>
						<br />
						<a href="https://www.cvs.com/immunizations/covid-19-vaccine">CVS</a>
						<br />
						<a href="https://www.vaccines.gov/">Vaccines.gov</a>
						<br />
						<a href="https://www.riteaid.com/pharmacy/scheduler">Rite Aid</a>
						<br />
						<a href="https://www.kroger.com/rx/covid-vaccine">Kroger</a>
						<br />
					</div>
					<div className="uk-card-footer">
						<p className="uk-margin-remove-bottom">
							For more info, visit{" "}
							<a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html">
								Benefits of Getting a COVID-19 Vaccine
							</a>
						</p>
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
								href="/login"
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
	);
};
export default Covid;
