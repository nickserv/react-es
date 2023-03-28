import { createElement, useState } from "react"
import htm from "htm"

const html = htm.bind(createElement)

function App() {
  const [count, setCount] = useState(0)

  return html`<div className="App">
    <a href="https://react.dev/" target="_blank">
      <img src="/react.svg" className="logo" alt="React logo" />
    </a>
    <h1>React but with HTM</h1>
    <div className="card">
      <button onClick=${() => setCount((count) => count + 1)}>
        count is ${count}
      </button>
    </div>
    <p className="read-the-docs">Click on the React logo to learn more</p>
  </div>`
}

export default App
