import React from "react";
import { Table } from "reactstrap";
import {formatCurrency}from'../../util'

const ItemsTable = ({items,tradeCheckHandler}) => {
	// const formatCurrency=(num)=>{
    //     return "€ " + Number(num.toFixed(2)).toLocaleString() + " ";
	//   }
	console.log(items)
	return (
		<Table bordered style={{ marginTop: "30px" }}>
			<thead>
				<tr>
					<th>Item Type</th>
					<th>Type Value</th>
					<th>Color</th>
					<th>Color Value</th>
					<th>Brand Type</th>
					<th>Brand Name</th>
					<th>Brand Base Price</th>
					<th>Retail Price</th>
					<th>Buy Price</th>
					<th>Trade Price</th>
					<th>Trade</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item, index) => (
					<tr key={item.id}>
						<th scope="row">{item.itemType}</th>
						<td>{item.itemValue}</td>
						<td>{item.color}</td>
						<td>{item.colorValue}</td>
						<td>{item.brandType}</td>
						<td>{item.brandName}</td>
						<td>{formatCurrency(item.brandPrice)}</td>
						<td>{formatCurrency(item.retailPrice)}</td>
						<td>{formatCurrency(item.buyPrice)}</td>
						<td>{formatCurrency(item.tradePrice)}</td>
						<td>
							<input type="checkbox" onChange={()=>tradeCheckHandler(item.id)} checked={item.checked}/>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};
ItemsTable.defaultProps = {
	items: [

	],
};
export default ItemsTable;
