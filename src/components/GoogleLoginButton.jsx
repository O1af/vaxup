import { React, useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { Navigate } from "react-router-dom";

const GoogleLoginButton = () => {
	const [user, setUser] = useState();
	const [redirect, setRedirect] = useState(false);
	useEffect(() => {
		console.log(user);
	}, [user]);
	const responseGoogle = async (response) => {
		setUser(response.googleId);
		localStorage.setItem("user", response.googleId);
		setRedirect(true);
	};
	if (redirect) {
		return (
			<Navigate
				to={{
					pathname: "form",
					state: { user },
				}}
			/>
		);
	}
	return (
		<GoogleLogin
			clientId="304194997486-8r1pva8e4eoggqq53eah6hr5c1si7125.apps.googleusercontent.com"
			buttonText="Login"
			onSuccess={responseGoogle}
			cookiePolicy={"single_host_origin"}
		/>
	);
};

export default GoogleLoginButton;
