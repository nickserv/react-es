import { createElement, useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"a",
			{ href: "https://react.dev/", target: "_blank" },
			createElement("img", {
				src: "/react.svg",
				className: "logo",
				alt: "React logo",
			}),
		),
		createElement("h1", {}, "React"),
		createElement(
			"div",
			{ className: "card" },
			createElement(
				"button",
				{ onClick: () => setCount((count) => count + 1) },
				"count is ",
				count,
			),
		),
		createElement(
			"p",
			{ className: "read-the-docs" },
			"Click on the React logo to learn more",
		),
	);
}

export default App;
