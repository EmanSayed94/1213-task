import React, { Component } from "react";
import AddCustomer from "../../Components/AddCustomer";

class CustomerPage extends Component {
	state = {
		newCustomer: {
			firstName: "",
			lastName: "",
			email: "",
			country: "Germany",
			street: "",
			postalCode:"",
			region: "Berlin",
		},
	};
	inputHandler = (e) => {
		const newCustomer = { ...this.state.newCustomer };
		let value =
			e.target.name === "postalCode" ? +e.target.value : e.target.value;
		newCustomer[e.target.name] = value;
		this.setState({ newCustomer });
	};
	selectCountry = (val) => {
		const newCustomer = { ...this.state.newCustomer, country: val };
		this.setState({ newCustomer });
	};

	selectRegion = (val) => {
		const newCustomer = { ...this.state.newCustomer, region: val };
		this.setState({ newCustomer });
	};
	addCustomerHandler = (e) => {
		e.preventDefault();
		const newCustomer = { ...this.state.newCustomer };
		console.log(newCustomer);
	};
	clearHandler=()=>{
	const newCustomer={
			firstName: "",
			lastName: "",
			email: "",
			country: "Germany",
			street: "",
			postalCode:"",
			region: "Berlin",
		}
		this.setState({newCustomer})
	}
	render() {
		const {
			inputHandler,
			addCustomerHandler,
			selectCountry,
			selectRegion,
			clearHandler
		} = this;
		const { newCustomer } = this.state;
		// console.log(country)
		return (
			<AddCustomer
				customer={newCustomer}
				inputHandler={inputHandler}
				addCustomer={addCustomerHandler}
				clearHandler={clearHandler}
				selectCountry={selectCountry}
				selectRegion={selectRegion}
			/>
		);
	}
}

export default CustomerPage;
