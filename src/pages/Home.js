import Feedbacks from "../components/Feedbacks";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Specials from "../components/Specials";

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Specials />
			<Feedbacks />
		</Layout>
	);
};

export default Home;
