import React, { Component } from "react";
import { updateCurrentCategory } from "../actions/homeActions";
import { fetchMenuItems } from "../actions/homeActions";
import { connect } from "react-redux";
import MenuItem from "../components/MenuItem";
import {PropTypes} from "prop-types";

class Menu extends Component {
    componentDidMount = () => {
        this.props.requestMenuItems();
    }
    render() {
        return (
            <div>
			{this.props.menuItems.map(
				(item)=><MenuItem key={item.filterName} filterName={item.filterName} filterType={item.filterType} />
			)}
			</div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestMenuItems: () => {
            dispatch(fetchMenuItems());
        }
    };
};

const mapStateToProps = (state) => {
    //console.log("******menu*****");
    //console.log(state);
    return {
        menuItems: state.menu
    };
};

Menu.propTypes = {
    menuItems:PropTypes.array,
    requestMenuItems: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);