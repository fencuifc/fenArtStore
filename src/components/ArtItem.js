import React, {Component} from "react";
import {connect} from "react-redux";
import {addToCart} from "../actions/cartActions";

class ArtItem extends Component{
	handleClick = (id)=>{
		console.log("handleCLick fuc");
		this.props.addToCart(id);
	}
	render(){
		return (
			<div className="card" key={this.props.item.id}>
				<div className="card-image">
					<img src={this.props.item.imgUrl} alt = {this.props.item.title}/>
					<span  className="btn-floating halfway-fab waves-effect waves-light black" onClick={()=>this.handleClick(this.props.item.id)}><i className="material-icons">add</i></span>					
				</div>
				<div className="card-content">
					<p class="title">{this.props.item.title}</p>
					<p class="size">{this.props.item.size}</p>
					<div class="author-price">
						<p class="author">{this.props.item.author}</p>
						<p class="price">$ {this.props.item.price}</p>
					</div>
				</div>
			</div>		
		)
	}
}
const mapDispatchToPrps = (dispatch)=>{
	return {
		addToCart:(id)=>{dispatch(addToCart(id))}
	}
}

export default connect(null, mapDispatchToPrps)(ArtItem);