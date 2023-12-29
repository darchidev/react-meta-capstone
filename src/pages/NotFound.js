import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Layout>
			<div className="max-w-5xl mx-auto text-center my-10">
				<h1 className="text-3xl">Sorry but this page doesn't exist!</h1>
				<Link to="/">
					<button className="my-10 px-8 py-2 mx-4 bg-[#f4cd14] hover:bg-[#495C55] border border-transparent hover:border hover:border-[#495C55] hover:text-white rounded-3xl">
						Turn Back Home
					</button>
				</Link>
			</div>
		</Layout>
	);
};

export default NotFound;
