import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

const Nav = ({ items }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="mx-auto flex h-24 border">
			<img
				src={Logo}
				alt="Little Lemon logo"
				height={"3rem"}
				className="py-2 px-3 mr-2"
			/>
			<ul className="flex gap-0 w-full">
				{items.map((item) => (
					<li className="hidden lg:block my-auto px-6 py-6 border border-transparent hover:bg-[#F4CE13] font-sans font-light text-sm hover:border hover:border-[#485E58] text-[#485E58]">
						<a href={item.path}>{item.title.toUpperCase()}</a>
					</li>
				))}

				<li className="lg:hidden flex flex-row-reverse mx-4 w-full">
					<button type="button" onClick={() => setIsOpen(!isOpen)} className="">
						{isOpen ? <IoCloseSharp size={30} /> : <IoMenuSharp size={30} />}
					</button>
				</li>
			</ul>
			{isOpen && (
				<ul className="bg-white absolute w-1/2 border-r-2 h-full">
					{items.map((item) => (
						<li className="my-auto px-6 py-6 border border-transparent hover:bg-[#F4CE13] font-sans font-light text-sm hover:border hover:border-[#485E58] text-[#485E58]">
							<a href={item.path}>{item.title.toUpperCase()}</a>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
};

export default Nav;
