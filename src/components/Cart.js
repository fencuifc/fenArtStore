import React, {Component} from "react";
import {connect} from "react-redux";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

class Cart extends Component {
	render(){
		return (
			<div className="cart">
				<div className="container">
					<h5>Cart:</h5>
					<ul className="collection">
						{
							this.props.addedItems.length ? 
							(this.props.addedItems.map((item)=>(
								<CartItem item={item} />
							))):(<p>Nothing.</p>)
						}
					</ul>
				</div>
				<Checkout />
			</div>
		);
	}
}
const mapStateToProps = (state)=>{
	console.log("******cart components");
	console.log(state.cart.addedItems);
	return {
		addedItems:state.cart.addedItems
	}
}
export default connect(mapStateToProps)(Cart);