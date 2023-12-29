import React from "react";
import FreshSalad from "../assets/fresh-salad.jpeg";
import Hamburger from "../assets/hamburger.jpeg";
import Pizza from "../assets/pizza.jpg";

const Card = ({ props, key }) => {
	const { title, price, content, image } = props;
	return (
		<div
			className="lg:w-1/3 w-full flex flex-col text-[#495C55] rounded-2xl bg-slate-50"
			key={key}
		>
			<img src={image} alt={title} className="h-60 rounded-t-2xl" />
			<div className="flex justify-between my-6 mx-4">
				<h3 className="text-xl">{title}</h3>
				<span className="text-orange">{price}</span>
			</div>
			<p className="font-sans mx-4 text-justify">{content}</p>
			<button className="my-10 px-8 py-2 mx-4 bg-[#f4cd14] hover:bg-[#495C55] border border-transparent hover:border hover:border-[#495C55] hover:text-white rounded-3xl">
				Order now!
			</button>
		</div>
	);
};

const Specials = () => {
	const loremIpsum =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet turpis vestibulum diam semper posuere. Quisque consequat egestas aliquam.";
	const items = [
		{
			title: "Fresh salad",
			price: 15.99,
			content: loremIpsum,
			image: FreshSalad,
		},
		{
			title: "Hamburger",
			price: 12.99,
			content: loremIpsum,
			image: Hamburger,
		},
		{
			title: "Pizza",
			price: 9.99,
			content: loremIpsum,
			image: Pizza,
		},
	];
	return (
		<div>
			<div className="max-w-5xl mx-auto mt-20 mb-10 justify-between flex">
				<h1 className="text-3xl">This week specials!</h1>
				<button className="px-8 py-2 bg-[#f4cd14] hover:bg-[#495C55] border border-transparent hover:border hover:border-[#495C55] hover:text-white rounded-3xl">
					Online Menu
				</button>
			</div>
			<div className="max-w-5xl mx-auto flex gap-4 flex-col lg:flex-row">
				{items.map((item, i) => {
					return <Card props={item} key={`${item}-${i}`} />;
				})}
			</div>
		</div>
	);
};

export default Specials;
