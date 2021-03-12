import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";

class ArtItem extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    render() {
        return (
            <div className="card" key={this.props.item.id}>
				<div className="card-image">
					<img src={this.props.item.imgUrl} alt = {this.props.item.title}/>
					<Link to="/cart"  className="btn-floating halfway-fab waves-effect waves-light black" onClick={()=>this.handleClick(this.props.item.id)}>
						<a className="material-icons">add</a>
					</Link>				
				</div>
				<div className="card-content">
					<p className="title">{this.props.item.title}</p>
					<p className="size">{this.props.item.size}</p>
					<div className="author-price">
						<p className="author">{this.props.item.author}</p>
						<p className="price">$ {this.props.item.price}</p>
					</div>
				</div>
			</div>
        );
    }
}
const mapDispatchToPrps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)); }
    };
};

ArtItem.propTypes = {
	item:PropTypes.object,
	addToCart: PropTypes.func
};
export default connect(null, mapDispatchToPrps)(ArtItem);