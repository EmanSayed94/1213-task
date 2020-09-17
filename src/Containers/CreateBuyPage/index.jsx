import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import AddItem from "../../Components/AddItem";
import ItemsTable from "../../Components/ItemsTable";
import { brands, colors } from "./constants";
import { formatCurrency } from "../../util";

import {
	ADD_ITEM,
	GET_CUSTOMER_BY_ID,
	GET_ITEM_BY_USER_ID,
	TOGGLE_CHECK
} from "../../redux/actionTypes";

class CreateBuy extends Component {
	state = {
		item: {
			
			userId: "",
			itemType: "",
			itemValue: "",
			color: "",
			colorValue: "",
			brandType: "Directional",
			brandName: "A",
			brandPrice: 50,
			checked: false,
		},
		colors,
		brands,
		selectedBrand: "Directional",
		totalBuys: "",
		
	};

	componentDidMount = () => {
		const userId = +this.props.match.params.id;
		this.props.getItemsByUserId(userId);
		const item = { ...this.state.item, userId };
		this.props.getCustomer(userId);
		
		this.setState({ item });
	};
	typeHandler = (e) => {
		const item = {
			...this.state.item,
			itemType: e.target.alt,
			itemValue: +e.target.id,
		};

		this.setState({ item });
	};
	setColor = (color) => {
		const item = {
			...this.state.item,
			color: color.color,
			colorValue: +color.value,
		};
		this.setState({ item });
	};
	BrandTypeHandler = (e) => {
		this.setState({ selectedBrand: e.target.value });
	};
	selectBrandHandler = (e, brand) => {
		const selectedBrand = brand.properties.find(
			({ name }) => name === e.target.value
		);
		const item = { ...this.state.item };
		item.brandType = brand.type;
		item.brandName = selectedBrand.name;
		item.brandPrice = selectedBrand.weight;

		this.setState({ item });
	};

	AddItemHandler = () => {
		let item = { ...this.state.item,id: uuidv4()};
		const { itemValue, colorValue, brandPrice } = item;
		const retailPrice = itemValue * colorValue * brandPrice;
		const buyPrice = 0.5 * retailPrice;
		const tradePrice = (1 / 3) * retailPrice;
		item = { ...item, retailPrice, buyPrice, tradePrice };

		this.props.addNewItem(item);
		this.props.getItemsByUserId(item.userId);		
	};
	tradeCheckHandler=(id)=>{
this.props.toggleCheck(id);
this.setState({})
}
	calculateTotal = () => {
		let items = this.props.userItems;
	
		const cashTotal = items.reduce(
			(acc, item) => {
				if (!item.checked) {
					
					return acc + item.buyPrice;
				}else{
					return acc
				}
			},

			0
		);
		const creditTotal = items.reduce((acc, item) => {
			if (item.checked) {
				return acc + item.tradePrice;
			}else{
				return acc
			}
		}, 0);
		// this.props.addTotal(+this.props.params.id, { cashTotal, creditTotal });
	
		return { cashTotal, creditTotal };
	};
	render() {
		const { brands, colors, selectedBrand } = this.state;
		const { customer } = this.props;
		const totalBuys=this.calculateTotal();

		return (
			<React.Fragment>
				{customer && (
					<div className="customer-info">
						<div>{customer.firstName + " " + customer.lastName}</div>
						<div>{customer.email}</div>
						<div>{customer.street}</div>
					</div>
				)}
				<AddItem
					brands={brands}
					colors={colors}
					selectedBrandValue={selectedBrand}
					selectBrandHandler={this.selectBrandHandler}
					itemTypeHandler={this.typeHandler}
					setColor={this.setColor}
					BrandTypeHandler={this.BrandTypeHandler}
					selectedColor={this.state.item.color}
					AddItemHandler={this.AddItemHandler}
				/>
				<ItemsTable items={this.props.userItems} tradeCheckHandler={this.tradeCheckHandler}/>
				{totalBuys && (
					<div className="totals">
						<h2>Totals</h2>
						<div>
							Cash to the Customer:{" "}
							{formatCurrency(totalBuys.cashTotal)}{" "}
						</div>
						<div>
							Credit to be added to customer:{" "}
							{formatCurrency(totalBuys.creditTotal)} 
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}
const mapDisptchToProps = (dispatch) => {
	return {
		addNewItem: (newItem) => {
			dispatch({ type: ADD_ITEM, payload: newItem });
		},
		getItemsByUserId: (id) => {
			dispatch({ type: GET_ITEM_BY_USER_ID, payload: id });
		},
		getCustomer: (id) => {
			dispatch({ type: GET_CUSTOMER_BY_ID, payload: id });
		},
		toggleCheck:(id)=>{
			dispatch({type:TOGGLE_CHECK,payload:id})
		}
	
	};
};
const mapStateToProps = (state) => {
	return {
		userItems: state.itemsReducer.userItems,
		customer: state.customers.customer,
	};
};

export default connect(mapStateToProps, mapDisptchToProps)(CreateBuy);
