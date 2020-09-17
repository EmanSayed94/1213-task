import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CreateBuy from "./Containers/CreateBuyPage/index";
import CustomerPage from "./Containers/CustomersPage/index";

function App() {
	return (
		<div className="container">
			<Switch>
				<Route path="/" exact component={CustomerPage} />
				<Route path="/home" component={CustomerPage} />
				<Route path="/CreateBuy/:id" component={CreateBuy} />
			</Switch>
		</div>
	);
}

export default App;
