import React from "react";
import { Button } from "reactstrap";

const AddItem = (props) => {
	const {
		colors,
		brands,
		selectedBrandValue,
		selectBrandHandler,
		itemTypeHandler,
		setColor,
		BrandTypeHandler,
		selectedColor,
		AddItemHandler
	} = props;
	console.log(brands);
	const getBrandName = () => {
		const brand = brands.find(({ type }) => type === selectedBrandValue);
		return (
			<select
				className="form-control brand-dropdown"
				onChange={(e) => selectBrandHandler(e, brand)}
			>
				{brand.properties.map((brand, index) => (
					<option key={index} value={brand.name}>
						{brand.name}
					</option>
				))}
			</select>
		);
	};

	return (
		<div className="item-form">
			<h3>Item Type</h3>
			<div onClick={itemTypeHandler}>
				<img
					src="/images/dress.png"
					alt="Dress"
					className="item-img"
					id={1.2}
				/>
				<img
					src="/images/pants.png"
					alt="Trousers"
					className="item-img"
					id={0.8}
				/>
				<img
					src="/images/shirt.jpg"
					alt="Shirt"
					className="item-img"
					id={0.9}
				/>
				<img
					src="/images/t-shirt.png"
					alt="T-Shirt"
					className="item-img"
					id={1}
				/>
			</div>
			<h3>Color</h3>
			<div className="color-row">
				Primary Color:
				{colors.map((color) => (
					<div
						key={color.color}
						className="color"
						onClick={() => setColor(color)}
						style={{ backgroundColor: color.color, marginRight: "10px" }}
					></div>
				))}
				<div />
				<div style={{display:"flex"}}>
					<label style={{ marginLeft: "30PX" }}>Selected:</label>
					<div
						style={{
							backgroundColor: selectedColor || "gray",
							width: "30px",
							height: "30px",
							marginLeft: "20px",
							marginTop: "-5px",
						}}
					></div>
				</div>
			</div>

			<h3>Brand</h3>

			<div className="brandDropdown-container">
				<select
					className="form-control brand-dropdown"
					onChange={BrandTypeHandler}
				>
					{brands.map(({ type },index) => (
						<option key={index} value={type}>{type}</option>
					))}
				</select>

				{getBrandName()}
			</div>
			<div className="addItem-button">
				<Button onClick={AddItemHandler}>Add Item</Button>
			</div>
		</div>
	);
};
AddItem.defaultProps = {
	colors: [],
};
export default AddItem;
