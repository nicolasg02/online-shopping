import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "tw-elements"

import { ProductData } from "./Helpers/Context"
import { data } from "./data"

ReactDOM.render(
  <React.StrictMode>
    <ProductData.Provider value={data}>
      <App />
    </ProductData.Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
