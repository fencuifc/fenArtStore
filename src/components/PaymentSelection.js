import React, {useState} from "react";

function PaymentSelction(props) {
	const [paymentType, setPaymentType] = useState("card");//React Hook,paymentType is state, and setPaymentType is setter
	const selectPaymentType = (e) => {
		setPaymentType(e.target.value);
	};
	return (
		<div>
			<div className="paymentSelect">
				<input type="radio" role="button" name="paymentType" value="card"  onChange={selectPaymentType}/>
				<div>Credit or debit card</div>
				{paymentType === "card" && <div>card</div>}
			</div>
			<div className="paymentSelect">
				<input type="radio" role="button" name="paymentType" value="paypal"  onChange={selectPaymentType}/>
				<div>
					<img src="//d3t95n9c6zzriw.cloudfront.net/checkout/paypal.svg" alt="paypal" />
				</div>
			</div>
			<div className="paymentSelect">
				<input type="radio" role="button" name="paymentType" value="affirm" onChange={selectPaymentType}/>
				<div>
					<img alt="Affirm Logo" src="//d3t95n9c6zzriw.cloudfront.net/checkout/Affirm_Blue-Logo_Updated.svg" />
				</div>			
			</div>
		</div>
	);
}

export default  PaymentSelction;