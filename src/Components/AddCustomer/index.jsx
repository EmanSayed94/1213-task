import React from "react";
import { Row, Col, Button, Label, Input, FormGroup } from "reactstrap";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const AddCustomer = (props) => {

	const {
		inputHandler,
		addCustomer,
		selectCountry,
		selectRegion,
		clearHandler,
		customer: {
			firstName,
			lastName,
			email,
			country,
			street,
			postalCode,
			region,
		},
	} = props;
	return (
		<React.Fragment>
			<h1 style={{ textAlign: "left", marginBottom: "20px" }}>Customers</h1>
			<div className="customer-form">
				<div className="mb-3">
					<Label className="font-weight-bold ">Personal Information</Label>
					<Row>
						<Col md={6}>
							<FormGroup>
								<Input
									type="text"
									name="firstName"
									placeholder="First name"
									onChange={inputHandler}
									value={firstName}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Input
									type="text"
									name="lastName"
									placeholder="Last Name"
									onChange={inputHandler}
									value={lastName}
								/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Label></Label>
						<Input
							type="email"
							name="email"
							placeholder="Email Addres"
							onChange={inputHandler}
							value={email}
						/>
					</FormGroup>
				</div>
				<div className="mt-3">
					<FormGroup>
						<Label className="font-weight-bold">Address</Label>

						<CountryDropdown
							value={country}
							onChange={(val) => selectCountry(val)}
							className="form-control"
						/>
					</FormGroup>
					<FormGroup>
						<Input
							type="text"
							name="street"
							placeholder="Street name ,number"
							onChange={inputHandler}
							value={street}
						/>
					</FormGroup>
					<Row>
						<Col md={3}>
							<FormGroup>
								<Input
									type="number"
									name="postalCode"
									placeholder="Postal code"
									onChange={inputHandler}
									value={postalCode}
								/>
							</FormGroup>
						</Col>
						<Col md={9}>
							<FormGroup>
								<RegionDropdown
								 country={country}
									value={region}
									onChange={(val) => selectRegion(val)}
									 className="form-control"
								/>
							</FormGroup>
						</Col>
					</Row>
				</div>

				<div className="form-buttons">
					<Button color="danger" className="mr-3" onClick={clearHandler}>
						Clear
					</Button>
					<Button color="primary" onClick={addCustomer}>
						Add Customer
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AddCustomer;
