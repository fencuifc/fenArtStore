import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQ, handleRemoveQ, handleRemove } from "../actions/cartActions";
import {PropTypes} from "prop-types";

class CartItem extends Component {
    handleAddQ = (id) => {
        this.props.handleAddQ(id);
    };
    handleRemoveQ = (id) => {
        this.props.handleRemoveQ(id);
    };
    handleRemove = (id) => {
        this.props.handleRemove(id);
    };
    render() {
        return (
            <div className="cart-item">
			   <div className="item-img"> 
		            <img src={this.props.item.imgUrl} alt={this.props.item.title} className=""/>
		        </div>
		    
		        <div className="item-desc">
		            <div className="title">{this.props.item.title}</div>
		            <div className="author">{this.props.item.author}</div>
		            <p><b>Price:$ {this.props.item.price}</b></p> 
		            <p>
		                <b>Quantity: {this.props.item.quantity}</b> 
		            </p>
		            <div className="add-remove">
		                <a><i className="material-icons" onClick={()=>{this.handleAddQ(this.props.item.id);}}>arrow_drop_up</i></a>
		                <a><i className="material-icons" onClick={()=>{this.handleRemoveQ(this.props.item.id);}}>arrow_drop_down</i></a>
		            </div>
		            <button className="waves-effect waves-light btn black remove" onClick={()=>{this.handleRemove(this.props.item.id);}}>
		            	Remove
		            </button>
		        </div>
		    </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleRemove: (id) => { dispatch(handleRemove(id)); },
        handleAddQ: (id) => { dispatch(handleAddQ(id)); },
        handleRemoveQ: (id) => { dispatch(handleRemoveQ(id)); }
    };
};

CartItem.propTypes = {
	item: PropTypes.object,
	handleAddQ: PropTypes.func,
	handleRemove: PropTypes.func,
	handleRemoveQ: PropTypes.func
};
export default connect(null, mapDispatchToProps)(CartItem);