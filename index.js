import { createElement as h, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	h(StrictMode, {}, h(App)),
);
