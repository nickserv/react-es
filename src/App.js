import { createElement, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return createElement(
    "div",
    { className: "App" },
    createElement(
      "div",
      {},
      createElement(
        "a",
        { href: "https://vitejs.dev", target: "_blank" },
        createElement("img", {
          src: viteLogo,
          className: "logo",
          alt: "Vite logo",
        }),
      ),
      createElement(
        "a",
        { href: "https://react.dev/", target: "_blank" },
        createElement("img", {
          src: reactLogo,
          className: "logo react",
          alt: "React logo",
        }),
      ),
    ),
    createElement("h1", {}, "Vite + React"),
    createElement(
      "div",
      { className: "card" },
      createElement(
        "button",
        { onClick: () => setCount((count) => count + 1) },
        "count is ",
        count,
      ),
      createElement(
        "p",
        {},
        "Edit ",
        createElement("code", {}, "src/App.js"),
        " and save to test HMR",
      ),
    ),
    createElement(
      "p",
      { className: "read-the-docs" },
      "Click on the Vite and React logos to learn more",
    ),
  )
}

export default App
