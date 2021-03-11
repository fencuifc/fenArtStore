import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStoreItems } from "../actions/homeActions";
import ArtItem from "../components/ArtItem";
import Menu from "../components/Menu";
import {PropTypes} from "prop-types";

class Home extends Component {
    componentDidMount = () => {
        this.props.requestStoreItems();
    }
    render() {
        let displayItems = [];
        console.log("render at home" + this.props.category);
        if (this.props.category.length > 0) {
            displayItems = this.props.items.filter((item) => this.props.category.every((category) => item.category.includes(category)));
        } else {
            displayItems = this.props.items;
        }

        let itemListView = displayItems.length > 0 ? (displayItems.map(item => {
            return <ArtItem key={item.id} item={item} />;
        })) : (<div>No result found</div>);

        return (
            <div  className="container home">
				<div className="page-header">
					<h3 className="header-title">Original Art For Sale</h3>
				</div>
				<div className="page-desc">
					<p >FenF Art offers an unparalleled selection of over 446,320 original artworks from artists from all over the world, including paintings, photography, sculpture, drawings, collage, and limited editions.
					</p>
				</div>
				<div className="page-content">
					<Menu />
					<div className="box">{this.props.items.length>0?itemListView:(<div>loading...</div>)}</div>
				</div>
			</div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("******");
    console.log(state);
    return {
        items: state.cart.items,
        category: state.cart.category
    };
};

const mapDispatchToPrps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)); },
        requestStoreItems: () => { dispatch(fetchStoreItems()); }
    };
};
Home.propTypes = {
    items:PropTypes.array,
    category:PropTypes.array,
    addToCart:PropTypes.func,
    requestStoreItems:PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToPrps)(Home);