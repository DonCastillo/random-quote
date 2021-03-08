import React from "react";
import "./Socials.css";

const Socials = (props) => {
	const authorHashtag = () => {
		if (props.quote.author)
			return props.quote.author.replace(/[\s\W]/g, "");
	};

	const socialInfo = {
		twitter: {
			text: props.quote.quote,
			hashtags: ["quote", authorHashtag()],
		},
	};

	const textIntent = () => {
		if (socialInfo.twitter.text)
			return `"${socialInfo.twitter.text.replace(/\s/g, "%20")}"`;
	};
    
	const hashtagIntent = () => {
		return socialInfo.twitter.hashtags.join(",");
	};

	const twitterIntent = `https://twitter.com/intent/tweet?text=${textIntent()}&hashtags=${hashtagIntent()}`;

	const style = {
		backgroundColor: props.bgColor,
	};

	return (
		<div id="socials">
			<a
				href={twitterIntent}
				style={style}
				target="_blank"
				id="tweet-quote"
				className="twitter-share-button"
				rel="noreferrer"
			>
				<i className="fab fa-twitter"></i>
			</a>
		</div>
	);
};

export default Socials;
