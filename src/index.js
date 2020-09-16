import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./redux/store";

ReactDOM.render(
	<Provider store={myStore}>
		<BrowserRouter>
		<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
