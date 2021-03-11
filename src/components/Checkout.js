import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTotalPrice } from "../actions/cartActions";
import {PropTypes} from "prop-types";

class Checkout extends Component {

    handleOnChange = (event) => {
        let checked = event.target.checked;
        let shippingFee = checked ? event.target.value : event.target.value * (-1);

        this.props.changeTotalPrice(Number(shippingFee));
    }
    render() {
        return (
            <div className="container">
				<div className="collection">
					<div className="collection-item">
						<label>
							<input type="checkbox" name="shipping" value="6" onChange={()=>{this.handleOnChange(event);}}></input>
							<span>shipping(+$6)</span>
						</label>
					</div>
					<div className="collection-item">
						<b>Total: $ {this.props.total}</b>
					</div>
				</div>
				<div className="checkout">
                    <button className="waves-effect waves-light btn black">Checkout</button>
                </div>
			</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        total: state.cart.totalPrice
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeTotalPrice: (price) => { dispatch(changeTotalPrice(price)); }
    };
};
Checkout.propTypes = {
    total: PropTypes.number,
    changeTotalPrice: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);