import React from "react";
import "./QuoteBox.css";
import Quote from "./Quote";
import Author from "./Author";
import Socials from "./Socials";
import Button from "./Button";

const QuoteBox = (props) => {
	return (
		<div id="quote-box">
			<Quote textColor={props.color}>{props.quote.quote}</Quote>
			<Author textColor={props.color}>{props.quote.author}</Author>
			<div className="buttons">
				<Socials 
                    bgColor={props.color} 
                    quote={props.quote} />
				<Button 
                    clickHandler={props.clickHandler} 
                    bgColor={props.color}>
					New Quote
				</Button>
			</div>
		</div>
	);
};

export default QuoteBox;
