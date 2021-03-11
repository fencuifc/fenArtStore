import React, {Component} from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";
import Game from "../components/Game";
import {connect} from "react-redux";

class NavBar extends Component{
	render(){
		return (
			<BrowserRouter>
				<div>
					<nav className="nav-container">
						<div className="navBar">
							<a className="logo" to="/">FenFArt</a>
							<ul>
								<li><Link to="/">Shop</Link></li>
								<li><Link to="/cart">MyCart(<span>{this.props.totalQuantity}</span>)</Link></li>
								<li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
								<li><Link to="/game">Game</Link></li>
							</ul>
						</div>
					</nav>
					<Switch>
				          <Route path="/cart">
				            <Cart />
				          </Route>
				          <Route path="/game">
				          	<Game />
				          </Route>
				          <Route path="/">
				            <Home />
				          </Route>
		        	</Switch>
				</div>
			</BrowserRouter>
		)
	}

}
const mapStateToProps = (state)=>{
	return{
		totalQuantity: state.cart.totalQuantity
	}
}
export default connect(mapStateToProps)(NavBar);