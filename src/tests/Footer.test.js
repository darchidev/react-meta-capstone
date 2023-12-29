import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { MemoryRouter } from "react-router-dom";

test("renders Footer component with correct content", () => {
	render(
		<MemoryRouter>
			<Footer />
		</MemoryRouter>
	);

	const sitemapHeading = screen.getByText("SITEMAP");
	const contactHeading = screen.getByText("CONTACT US");
	const socialsHeading = screen.getByText("SOCIALS");

	expect(sitemapHeading).toBeInTheDocument();
	expect(contactHeading).toBeInTheDocument();
	expect(socialsHeading).toBeInTheDocument();

	const sitemapList = screen.getAllByRole("list")[0];
	expect(sitemapList).toBeInTheDocument();
	expect(screen.getAllByRole("listitem")).toHaveLength(8); // Check if there are 8 list items in the sitemap

	const contactInfo = screen.getAllByText(/1234 Elm Street/);
	expect(contactInfo).toHaveLength(1);

	const socialLinks = screen.getAllByRole("link");
	expect(socialLinks).toHaveLength(4); // Check if there are 4 social links
});
