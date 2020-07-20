import React from "react";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";

const TestComponent = (): JSX.Element => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const modal = (
		<Modal
			onClose={() => setIsModalOpen(false)}
			isModalOpen={isModalOpen}
			header={"test"}
		>
			<>
				<button
					data-testid="close-modal"
					onClick={() => setIsModalOpen(false)}
				>
					Close
				</button>
			</>
		</Modal>
	);
	return (
		<>
			<button
				data-testid="open-modal"
				onClick={() => setIsModalOpen(false)}
			>
				Open
			</button>
			{modal}
		</>
	);
};

describe("if isModalOpen is true", () => {
	it("should render correctly", async () => {
		const { findByTestId, queryAllByTestId } = render(<TestComponent />);

		await findByTestId("open-modal");

		fireEvent.click(await findByTestId("open-modal"));

		expect(await findByTestId("modal")).toBeInTheDocument();

		// await findByTestId
	});
});
