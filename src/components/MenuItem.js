import React, {Component} from "React"
import {connect} from "react-redux"
import {updateCurrentCategory} from "../actions/homeActions"

class MenuItem extends Component{
	handleOnChange = (event)=>{
		let checkedValue = event.target.value;
		let updateType = event.target.checked?'add':'remove';
		this.props.updateCurrentCategory(checkedValue, updateType);
	}
	render(){
		return (
			<div className="menuItem" key={this.props.filterName}>
				<div className="Menu-header">
					<div className="header-msg">{this.props.filterName}</div>
					<div className="header-small-symbl"></div>
				</div>
				<div className="Menu-list">
					{this.props.filterType.map((item, index)=>	{
							let uniqueId = `menu-list-${this.props.filterName}${index}`;	
							return (
								<label key={index} for={uniqueId}>
									<input type="checkbox" id={uniqueId} name={uniqueId} value={item} onChange={()=>{this.handleOnChange(event)}}/>
									<span>{item}</span>
								</label>
							)
						}
					)}
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		updateCurrentCategory: (checkedValue, updateType)=>{dispatch(updateCurrentCategory(checkedValue, updateType))}
	}
}
export default connect(null,mapDispatchToProps)(MenuItem);