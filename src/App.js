import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Nav } from './components/common/Nav/Nav.jsx';
import { Books } from './components/screens/Books/Books.jsx';
import { BooksManager } from './components/screens/BooksManager/BooksManager.jsx';
import { Home } from './components/screens/Home/Home.jsx';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/books'>
					<Books />
				</Route>
				<Route path='/books-manager'>
					<BooksManager />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
			<Nav />
		</BrowserRouter>
	);
}

export default App;
