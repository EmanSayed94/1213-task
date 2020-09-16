import React, { Component } from "react";
import AddCustomer from "../../Components/AddCustomer";
import CustomersTable from "../../Components/CustomersTable";
import { connect } from "react-redux";
import { ADD_CUSTOMER } from "../../redux/actionTypes";
class CustomerPage extends Component {
	state = {
		newCustomer: {
			firstName: "",
			lastName: "",
			email: "",
			country: "Germany",
			street: "",
			postalCode: "",
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
		const newCustomer = { id: Date.now(), ...this.state.newCustomer };
		this.props.addNewCustomer(newCustomer);
		this.clearHandler();
	};
	clearHandler = () => {
		const newCustomer = {
			firstName: "",
			lastName: "",
			email: "",
			country: "Germany",
			street: "",
			postalCode: "",
			region: "Berlin",
		};
		this.setState({ newCustomer });
	};
	createBuyHandler = (id) => {
	this.props.history.replace(`/CreateBuy/${id}`);
		
	};
	render() {
		const {
			inputHandler,
			addCustomerHandler,
			selectCountry,
			selectRegion,
			clearHandler,
			createBuyHandler,
		} = this;
		const { newCustomer } = this.state;
		return (
			<React.Fragment>
				<AddCustomer
					customer={newCustomer}
					inputHandler={inputHandler}
					addCustomer={addCustomerHandler}
					clearHandler={clearHandler}
					selectCountry={selectCountry}
					selectRegion={selectRegion}
				/>
				<CustomersTable
					customers={this.props.customersList}
					createBuy={createBuyHandler}
				/>
			</React.Fragment>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addNewCustomer: (newCustomer) => {
			dispatch({ type: ADD_CUSTOMER, payload: newCustomer });
		},
	};
};
const mapStateToProps = (state) => {
	return {
		customersList: state.customers.customers,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
