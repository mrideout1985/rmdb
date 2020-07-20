import React from "react";
import { Footer } from "./Footer";
import { render } from "@testing-library/react";

describe("When opening the footer", () => {
	it("should render correctly", () => {
		const { getByTestId } = render(<Footer />);

		const footer = getByTestId("footer");

		expect(footer).toBeInTheDocument();
	});
});
