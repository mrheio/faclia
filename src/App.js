import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header } from './components/common/Header/Header.jsx';
import { Books } from './components/screens/Books/Books.jsx';
import { BooksManager } from './components/screens/BooksManager/BooksManager.jsx';
import { Home } from './components/screens/Home/Home.jsx';

function App() {
	return (
		<BrowserRouter>
			<Header />
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
		</BrowserRouter>
	);
}

export default App;
