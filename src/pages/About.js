import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<Layout>
			<div className="max-w-5xl mx-auto text-center my-10">
				<h1 className="text-3xl">Sorry but this page doesn't exist yet!</h1>
				<Link to="/">
					<button>Turn Back Home</button>
				</Link>
			</div>
		</Layout>
	);
};

export default About;
