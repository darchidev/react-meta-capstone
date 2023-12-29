import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import { MemoryRouter } from "react-router-dom";

test("renders Hero component with correct content", () => {
	render(
		<MemoryRouter>
			<Hero />
		</MemoryRouter>
	);

	const heading = screen.getByText("Little Lemon");
	const subheading = screen.getByText("Chicago");
	const description = screen.getByText(
		"We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
	);
	const link = screen.getByRole("link", { name: "Reserve a table" });

	expect(heading).toBeInTheDocument();
	expect(subheading).toBeInTheDocument();
	expect(description).toBeInTheDocument();
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute("href", "/"); // Check if the link has the correct href
});
