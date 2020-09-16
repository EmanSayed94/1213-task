export const colors = [
	{ color: "Dark Red", value: 1, hex: "#111" },
	{
		color: "Red",
		value: 0.9,
	},
	{ color: "Orange", value: 1.1 },
	{ color: "Yellow", value: 1.4 },
	{ color: "Green", value: 0.5 },
	{ color: "Aqua", value: 0.9 },
	{ color: "Black", value: 0.7 },
	{ color: "blue", value: 1.2 },
	{ color: "Violet", value: 1 },
	{ color: "Pink", value: 1.1 },
];

export const brands = [
	{
		type: "Directional",
		properties: [
			{ name: "A", weight: 50 },
			{ name: "B", weight: 60 },
			{ name: "C", weight: 70 },
		],
	},
	{
		type: "Mainstream",
		properties: [
			{ name: "A", weight: 70 },
			{ name: "B", weight: 70 },
			{ name: "C", weight: 80 },
			{ name: "D", weight: 90 },
			{ name: "E", weight: 20 },
			{ name: "F", weight: 127 },
		],
	}
];
// const { selectedBrand } = this.state


// const getBrandName = () => {
//   const brand = brands.find(({type}) => type === selectedView)
//   return (
// 	<div>
// 	  <select>
// 		{brand.properties.map(brand => <option value={brand}>{brand.name}</option>)}
// 	  </select>
// 	</div>
//   )
// }
// <div>
// <select onChange={(e) => this.setState({selectedBrand: e.target.value})}>
//   {brands.map(({type}) => <option value={type}>{type}</option>)}
// </select>

// {getBrandName()}
// </div>