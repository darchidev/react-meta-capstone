import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

const nav = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/" },
	{ title: "Menu", path: "/" },
	{ title: "Reservation", path: "/" },
	{ title: "Order Online", path: "/" },
	{ title: "Login", path: "/" },
];
function App() {
	return (
		<div className="mx-auto max-w-5xl">
			<Header>
				<Nav items={nav}></Nav>
			</Header>

			<Main></Main>
			<Footer></Footer>
		</div>
	);
}

export default App;
