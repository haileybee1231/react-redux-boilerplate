import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

import Main from './Main.jsx';

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	// App component handles all redirections based on path options below
	render() {
		return (
			<Router history={browserHistory}>
				<Switch>
					<Route exact path='/' component={Main} />
				</Switch>
			</Router>
		)
	}
}

export default App;
