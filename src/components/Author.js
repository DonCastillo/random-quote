import React from "react";
import "./Author.css";

const Author = (props) => {
	return (
		<p style={{ color: props.textColor }} id="author">
			- {props.children}
		</p>
	);
};

export default Author;
