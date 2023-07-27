import { createElement as h, useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return h(
		"div",
		{ className: "App" },
		h(
			"a",
			{ href: "https://react.dev/", target: "_blank" },
			h("img", { src: "/react.svg", className: "logo", alt: "React logo" }),
		),
		h("h1", {}, "React"),
		h(
			"div",
			{ className: "card" },
			h(
				"button",
				{ onClick: () => setCount((count) => count + 1) },
				"count is ",
				count,
			),
		),
		h(
			"p",
			{ className: "read-the-docs" },
			"Click on the React logo to learn more",
		),
	);
}

export default App;
