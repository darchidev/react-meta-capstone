import React from "react";
import Leanne from "../assets/leanne.jpeg";
import Ervin from "../assets/ervin.jpeg";
import Clementine from "../assets/clementine.jpeg";
import Patricia from "../assets/patriscia.jpeg";
import { LiaStarSolid } from "react-icons/lia";

const FeedCard = ({ props }) => {
	const { image, name, rating, comment } = props;
	const nRating = Array.from({ length: rating }, (_, index) => index + 1);
	return (
		<div className="bg-white text-black rounded-xl">
			<div className="mx-6 my-8">
				<img src={image} alt={name} className="mx-auto my-6 rounded-full" />
				<p className="text-center mb-4 font-bold text-gray-800">{name}</p>
				<div className="flex justify-center text-[#F4CD14] my-2">
					{nRating.map((rate) => (
						<LiaStarSolid />
					))}
				</div>
				<p className="text-justify font-thin font-serif">"{comment}"</p>
			</div>
		</div>
	);
};

const Feedbacks = () => {
	const comment =
		"Sed ultricies eros eu eros interdum, ut elementum dolor hendrerit. Donec rutrum imperdiet varius. Duis mollis malesuada bibendum. Pellentesque ullamcorper.";
	const people = [
		{
			image: Leanne,
			name: "Leanne Graham",
			rating: 4,
			comment: comment,
		},
		{
			image: Ervin,
			name: "Ervin Howell",
			rating: 3,
			comment: comment,
		},
		{
			image: Clementine,
			name: "Clementine Bauch",
			rating: 5,
			comment: comment,
		},
		{
			image: Patricia,
			name: "Patricia Lebsack",
			rating: 5,
			comment: comment,
		},
	];

	return (
		<div className="bg-[#495D56] text-white py-12">
			<div className="flex flex-col gap-5 max-w-5xl mx-auto lg:relative lg:flex">
				<div className="flex flex-col gap-3 px-3 py-2">
					<h1 className="text-white text-4xl font-serif">Our Customers...</h1>
					<div className="flex flex-col lg:flex-row gap-5 my-10">
						{people.map((person, i) => (
							<FeedCard props={person} key={i} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedbacks;
