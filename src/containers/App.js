import React from "react";
import "./App.css";
import QuoteBox from "./../components/QuoteBox";
import Credit from "./../components/Credit"
const axios = require("axios");

const colors = [
	"#b31e1e",
	"#b37c1e",
	"#b3b11e",
	"#77b31e",
	"#25b31e",
	"#1eb369",
	"#1eb3a2",
	"#1e90b3",
	"#1e5fb3",
	"#1e48b3",
	"#1e23b3",
	"#371eb3",
	"#5a1eb3",
	"#7a1eb3",
	"#ac1eb3",
	"#b31e84",
	"#9e8b37"
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: null,
			quote: {}
		};
		this.background = React.createRef();
	}

	getRandomIndex = (length) => {
		return Math.floor(Math.random() * length);
	};

	getRandomColor = () => {
		const randIndex = this.getRandomIndex(colors.length);
		this.setState({
			color: colors[randIndex],
		});
	};

	getRandomQuote = () => {
		axios
			.get("quotes.json")
			.then((response) => {
				const quotes = response.data.quotes;
				const randIndex = this.getRandomIndex(quotes.length);
				const randomQuote = quotes[randIndex];
				this.setState({
					quote: randomQuote,
				});
			})
			.catch((err) => {
				console.log("Error!", err);
			});
	};

	addFade = () => {
		const el = this.background.current;
		el.classList.add('fade-in')

		const listener = el.addEventListener('animationend', () => {
			el.classList.remove('fade-in')
			el.removeEventListener('animationend', listener)
		});
	}

	changeTheme = () => {
		this.getRandomColor();
		this.getRandomQuote();
		this.addFade();
	};

	componentDidMount() {
		this.changeTheme();
	}

	render() {
		const style = {
			backgroundColor: this.state.color,
		}

		return (	
			<div className="App">
				<div className="background" ref={this.background} style={style}></div>
					<QuoteBox
						quote={this.state.quote}
						color={this.state.color}
						clickHandler={this.changeTheme}
						fadeHandler={this.addFade}
					/>
					<Credit />
			</div>
		);
	}
}

export default App;
