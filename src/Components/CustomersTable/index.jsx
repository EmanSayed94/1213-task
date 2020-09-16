import React from "react";
import { Table } from "reactstrap";
import { Button } from "reactstrap";

const CustomersTable = (props) => {
	const { customers,createBuy } = props;
	return (
		<Table bordered style={{ marginTop: "30px" }}>
			<thead>
				<tr>
					<th> Name</th>
					<th>Email</th>
					<th>Address</th>
					<th>Postal code</th>
					<th>City</th>
					<th>Country</th>
					<th>Create a buy</th>
					<th>View Buys</th>
				</tr>
			</thead>
			<tbody>
				{customers.map((customer) => (
					<tr key={customer.id}>
						<th scope="row">{customer.firstName + " " + customer.lastName}</th>
						<td>{customer.email}</td>
						<td>{customer.address}</td>
						<td>{customer.postalCode}</td>
                <td>{customer.region}</td>
						<td>{customer.country}</td>
						<td>
							<Button onClick={()=>createBuy(customer.id)}>Create</Button>
						</td>
						<td>
							<Button>View</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};
CustomersTable.defaultProps={
    customers:[]
}
export default CustomersTable;
