import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import {PropTypes} from "prop-types";

class Cart extends Component {
    render() {
        return (
            <div className="cart">
				<div className="container">
					<h5>Cart:</h5>
					<ul className="collection">
						{
							this.props.addedItems.length ? 
							(this.props.addedItems.map((item, index)=>(
								<CartItem  key={index} item={item} />
							))):(<p>Nothing.</p>)
						}
					</ul>
				</div>
				<OrderSummary />
			</div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("******cart components");
    console.log(state.cart.addedItems);
    return {
        addedItems: state.cart.addedItems
    };
};
Cart.propTypes = {
	addedItems: PropTypes.array
};
export default connect(mapStateToProps)(Cart);