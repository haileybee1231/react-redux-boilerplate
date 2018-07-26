import React from 'react';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ resize: window.innerWidth <= 1600 })
		this.setState({ mobile: window.innerWidth <= 1000 })
	}

	render() {
		return (
			<h1>Hello World</h1>
		)
	}
}

export default Main;
