import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const nav = [
	{ title: "Home", path: "/" },
	{ title: "Menu", path: "/menu" },
	{ title: "Reservation", path: "/reservation" },
	{ title: "About", path: "/about" },
	//{ title: "Order Online", path: "/" },
	//{ title: "Login", path: "/" },
];
const Layout = ({ children }) => {
	return (
		<div className="mx-auto">
			<Header>
				<Nav items={nav}></Nav>
			</Header>

			{children}
			<Footer></Footer>
		</div>
	);
};

export default Layout;
