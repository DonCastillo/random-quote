import React from "react";
import "./Button.css";

const Button = (props) => {
	const style = {
		backgroundColor: props.bgColor,
	};

	return (
		<button id="new-quote" onClick={props.clickHandler} style={style}>
			{props.children}
		</button>
	);
};

export default Button;
