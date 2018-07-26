import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import reducers from '../../src/reducers/index.js';

export const store = createStore(
	combineReducers({
		state: reducers,
		routing: routerReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(createBrowserHistory(), store);
