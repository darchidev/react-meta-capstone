import { Link } from "react-router-dom";
import GreekSalad from "../assets/greek-salad.jpeg";

const Hero = () => {
	return (
		<div className="bg-[#495D56] text-white py-12">
			<div className="flex flex-col gap-5 max-w-5xl mx-auto lg:relative lg:flex">
				<div className="flex flex-col gap-3 px-3 py-2">
					<h1 className="text-[#F4CD14] text-4xl font-serif">Little Lemon</h1>
					<h2 className="text-2xl font-serif">Chicago</h2>
					<p className="font-serif lg:w-1/2 my-4">
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					<Link
						className="bg-[#F4CD14] text-[#495D56] hover:bg-white px-5 py-2 rounded-3xl w-fit "
						to={"/"}
					>
						Reserve a table
					</Link>
				</div>
				<img
					className="lg:w-1/2 lg:rounded-xl border lg:absolute lg:right-0"
					src={GreekSalad}
					alt="Restaurant food"
				/>
			</div>
		</div>
	);
};

export default Hero;
