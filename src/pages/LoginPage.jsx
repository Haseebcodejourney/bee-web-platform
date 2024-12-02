import React from 'react';
import Logo from "../assets/images/bee-keeping-logo.png"
import "../style/login/style.css"
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
	return (
		<>
			<section className="login-page-wrapper">
				<div className="login-page-wrapper-inner">
					<div className="login-detail">
						<figure>
							<img src={Logo} alt="" width="" height="" />
						</figure>
						<h1>Welcome to Smart Beekeeping</h1>
						<p>Monitor your hive health and bee behavior with our AI-powered solutions. Smart beekeeping
							combines
							traditional apiculture with advanced technology, using AI and IoT devices to monitor bee health,
							hive conditions, and productivity in real-time. This data-driven approach enhances beekeeping
							efficiency, detects diseases early, and promotes healthier bee populations and better honey
							yields.
						</p>
					</div>
					<div className="login-form">
						<h2>Login</h2>
						<p>Login into your pages account</p>
						<LoginForm/>
					</div>
				</div>
			</section>
		</>
	)
}
