import React from "react";
import { FaMailBulk } from "react-icons/fa";
import {
	FaXTwitter,
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaLocationPin,
	FaPhone,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import LemonLogo from "../assets/logo-white.png";

const Footer = () => {
	return (
		<footer>
			<div className="bg-[#485E58] w-full text-white">
				<div className=" max-w-5xl mx-auto grid grid-rows-10 gap-6 px-6 lg:grid-cols-10 py-8 lg:justify-items-center">
					<div className="col-span-2 ">
						<img src={LemonLogo} alt="Lemonlogo" className="w-1/3 lg:w-1/2" />
					</div>
					<div className="col-span-2 flex flex-col">
						<h3 className="text-lg py-2">SITEMAP</h3>
						<ul>
							<Link to="/">
								<li>Home</li>
							</Link>
							<Link to="/menu">
								<li>Menu</li>
							</Link>
							<Link to="/reservation">
								<li>Reservation</li>
							</Link>
							<Link to="/about">
								<li>About</li>
							</Link>
						</ul>
					</div>
					<div className="col-span-3">
						<h3 className="text-lg py-2">CONTACT US</h3>
						<p className="flex gap-3">
							<FaLocationPin />
							1234 Elm Street,Springfield, Anytown, USA 12345
						</p>
						<p className="flex gap-3">
							<FaPhone />
							(123)456 7890{" "}
						</p>
						<p className="flex gap-3">
							<FaMailBulk />
							tastybitescafe@littlelemon.com
						</p>
					</div>
					<div className="col-span-3">
						<h3 className="text-lg py-2">SOCIALS</h3>
						<ul className="flex gap-3">
							<li>
								<Link>
									<FaXTwitter />
								</Link>
							</li>
							<li>
								<Link>
									<FaFacebookF />
								</Link>
							</li>
							<li>
								<Link>
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link>
									<FaYoutube />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
