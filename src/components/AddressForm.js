import React from "react";
import {PropTypes} from "prop-types";

function AddressForm({changeShippingAddress, userInfo, addressInfo}=props) {
	let stateInputView = <div>
							<label forHtml="input-state" id="state">State</label>
							<input type="text" name="input-state" id="input-state" autocomplete="shipping locality" value={userInfo.state} onChange={(e)=>{changeShippingAddress('state',e.target.value);}} /> 
						</div>;
	let stateSelectView = <select name="state" id="state" placeholder="State" onChange={(e)=>{changeShippingAddress('state',e.target.value);}}>
							{addressInfo.USState && addressInfo.USState.map((item)=><option value={item.abbreviation}>{item.name}</option>)}
						</select>;
	let onChangeCountrySelection = (e) => {
		let countrySelected = e.target.value;
		changeShippingAddress("country",e.target.value);
	};
    return (
        <div className="form">
			<div className="input-wrapper input-group">
				<div className="">
					<label forHtml="input-firstName" className="">First Name</label>
					<input type="text" autocomplete="given-name" name="fname" id="input-firstName" value={userInfo.firstName} onChange={(e)=>{changeShippingAddress('firstName',e.target.value);}}/>
				</div>
				<div className="">
					<label forHtml="input-lastName" className="">Last Name</label>
					<input type="text" autocomplete="family-name" name="lname" id="input-lastName" value={userInfo.lastName} onChange={(e)=>{changeShippingAddress('lastName',e.target.value);}} />
				</div>
			</div>

			<div className="input-wrapper">
				<label forHtml="input-address" className="">Address</label>
				<input type="text" value="" name="ship-address" id="input-address" autocomplete="shipping street-address" value={userInfo.address} onChange={(e)=>{changeShippingAddress('address',e.target.value);}} />
			</div>

			<div className="input-wrapper input-group">
				<select name="country" id="country" placeholder="Country" onChange={onChangeCountrySelection}>
					{
						addressInfo.country && addressInfo.country.map((item)=><option value={item.abbreviation}>{item.country}</option>)
					}
				</select>
				<div>
					<label forHtml="input-city" id="city">city</label>
					<input type="text" name="input-city" id="input-city" autocomplete="shipping locality" value={userInfo.city} onChange={(e)=>{changeShippingAddress('city',e.target.value);}} /> 
				</div>
			</div>
			<div className="input-wrapper input-group">
				{userInfo.country === "US" ? stateSelectView : stateInputView}
				<div>
					<label forHtml="input-zipCode" id="zipCode">Zip / Postal Code</label>
					<input type="text" name="input-zipCode" id="input-zipCode" autocomplete="shipping locality" value={userInfo.zipCode} onChange={(e)=>{changeShippingAddress('zipCode',e.target.value);}} /> 
				</div>
			</div>

			<div className="input-wrapper">
				<label forHtml="input-phone" className="">Phone</label>
				<input type="tel" value="" name="phone" id="input-phone" autocomplete="tel" className="" value={userInfo.phone} onChange={(e)=>{changeShippingAddress('phone',e.target.value);}}/>
			</div>

			<div className="input-wrapper">
				<label forHtml="input-email" className="">Email Address</label>
				<input type="email" value="" autocomplete="email" id="input-email" className="" value={userInfo.email} onChange={(e)=>{changeShippingAddress('email',e.target.value);}}/>
			</div>
			<small><em>Your email will only be used to send you updates about your order</em></small>
		</div>
    )
}
AddressForm.propTypes = {
	shippingAddress: PropTypes.object
}
export default AddressForm;