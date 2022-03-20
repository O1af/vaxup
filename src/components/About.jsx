const About = () => {
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
								<li className="uk-active">
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
			<div className="uk-align-center">
				<div className="uk-margin-xlarge-left  uk-align-left uk-card uk-card-default uk-width-1-4@m">
					<div className="uk-card-header  uk-card-default">
						<div className="uk-grid-small uk-flex-middle" uk-grid>
							<div className="uk-width-expand">
								<h3 className="uk-card-title uk-text-bold  uk-margin-remove-bottom">
									Our Mission
								</h3>
							</div>
						</div>
					</div>
					<div className="uk-card-body">
						<h4 className="uk-text-default uk-text-strong">
							VaxxUP aims to increase vaccination rates, increase medical
							equity, improve trust in our healthcare system, and ultimately
							reduce the occurrence of preventable illness.
						</h4>
					</div>
				</div>
				<div className="uk-margin-xlarge-right uk-align-right uk-card uk-card-default uk-width-1-2@m">
					<div className="uk-card-header  uk-card-default">
						<div className="uk-grid-small uk-flex-middle" uk-grid>
							<div className="uk-width-expand">
								<h3 className="uk-card-title uk-text-bold uk-margin-remove-bottom">
									About
								</h3>
							</div>
						</div>
					</div>
					<div className="uk-card-body">
						<p>
							To achieve our mission, VaxxUP provides a concise explanation and
							timeline of the vaccines a child needs to receive. In doing so, we
							take a two-pronged approach to tackling this public health
							challenge.
							<br /> <br /> First, we address growing vaccine hesitancy due to
							widespread misinformation. It isn’t always easy nor practical to
							read through dense charts and guidelines to understand the
							vaccination schedule. This complexity leads to confusion and
							ultimately distrust. By creating a clear, concise, and informative
							timeline, Vaccine Checklist provides a transparent alternative. We
							combat apprehension with knowledge.
							<br /> <br /> Second, we address inequity in access to medical
							information. There are 17 diseases on the CDC vaccine schedule.
							Most require multiple doses (which change by vaccine brand) at
							varying ages. For an insured family with constant access to
							medical care, this complexity is entirely handled by the medical
							system. For those who are uninsured or have inconsistent access to
							medical care, navigating this complex schedule proves challenging.
							<a
								href="https://pubmed.ncbi.nlm.nih.gov/19414693/"
								target="_blank"
							>
								{" "}
								<br /> <br /> Thus, studies show low-income families have lower
								vaccination rates.
							</a>{" "}
							Vaccine Checklist helps families navigate this schedule and combat
							inequity in access to medical information.
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
export default About;
