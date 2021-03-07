import React from "react";
import "./Quote.css";

const Quote = (props) => {
	return (
		<h1 style={{ color: props.textColor }} id="text">
			<i className="fas fa-quote-left"></i>
			{props.children}
		</h1>
	);
};

export default Quote;
