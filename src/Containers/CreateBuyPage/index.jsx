import React, { Component } from "react";
import AddItem from "../../Components/AddItem";
import { brands, colors } from "./constants";
class CreateBuy extends Component {
	state = {
		item: {
			userId: "",
			itemType: "",
			itemValue: "",
			color: "",
			colorValue: "",
			brandType: "",
			brandName: "",
			brandPrice: "",
		},
		colors,
		brands,
		selectedBrand: "Directional",
	};
	componentDidMount = () => {
		const userId = +this.props.match.params.id;
		const item = { ...this.state.item, userId };
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
		let item = { ...this.state.item };
		const { itemValue, colorValue, brandPrice } = item;
		const retailPrice = itemValue * colorValue * brandPrice;
		const buyPrice = 0.5 * retailPrice;
		const tradePrice = (1 / 3) * retailPrice;
		item = { ...item, retailPrice, buyPrice, tradePrice };

		console.log(item);
	};
	render() {
		const { brands, colors, selectedBrand } = this.state;

		return (
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
		);
	}
}

export default CreateBuy;
