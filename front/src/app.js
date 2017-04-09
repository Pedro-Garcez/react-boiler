/*
 * Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { router } from './routes/all.js';

ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);

/*
* Accept hot reloads in dev mode
*/
if (module.hot) {
	module.hot.accept('./routes/all.js', () => {
		ReactDOM.render(
			<Provider store={store} key={Math.random()}>
				{require('./routes/all.js').router}
			</Provider>,
			document.getElementById('app')
		);
	});
}

//
// ReactDOM.render(
// 	<div className="layout">
// 		<div className="layout__container">
// 			<div className="layout__title">
// 				The Movie Thing
// 			</div>
// 			<SearchBar />
// 		</div>
// 	</div>,
// 	document.getElementById('app')
// );
