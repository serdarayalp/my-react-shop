import React from "react"

/* import ReactDom from "react-dom" */
import * as ReactDOMClient from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css"
import "./main.css"

import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<App/>);