import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { connect } from "react-redux";
import AddressForm from "../components/AddressForm";

class Checkout extends Component {
	render(){
		return (
			<div>
				<h1>Checkout</h1>
				<div>
					<h2>Shipping Address</h2>
					<AddressForm />
				</div>

				<div>
					<div>
						<h2>Payment Method</h2>
					</div>
					<div>
						<h2>Billing Address</h2>
					</div>
				</div>
				
			</div>
		);
	}
}
const mapDispatchToProps = (state) => {

};
const mapStateToProps = (dispatch) => {

};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);