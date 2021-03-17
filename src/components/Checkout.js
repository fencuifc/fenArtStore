import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { connect } from "react-redux";
import AddressForm from "../components/AddressForm";
import PaymentSelection from "../components/PaymentSelection";
import {changeShippingAddress, requestAddressInfo} from "../actions/checkoutActions";

class Checkout extends Component {
	componentWillMount(){
		console.log("will mount");
		//this.props.requestAddressInfo();
	}
	componentDidMount(){
		console.log("did mount");
		this.props.requestAddressInfo();
	}
	componentWillUnmount(){
		console.log("will unmount");
	}
	render(){
		return (
			<div className="checkOutContainer">
				<h1>Checkout</h1>
				<div>
					<h2>Shipping Address</h2>
					<AddressForm 
						changeShippingAddress = {this.props.changeShippingAddress}
						addressInfo={this.props.addressInfo}
						userInfo={this.props.userInfo}
					/>
				</div>
				<div>
					<h2>Payment Method</h2>
					<PaymentSelection /> 
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeShippingAddress: (label, val)=>{dispatch(changeShippingAddress(label, val));},
		requestAddressInfo: ()=>{dispatch(requestAddressInfo());}
	}
};
const mapStateToProps = (state) => {
	return {
		addressInfo: state.checkout.addressInfo,
		userInfo: state.checkout.userInfo
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);