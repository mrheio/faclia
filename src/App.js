import React from 'react';
import './App.scss';
import { Header } from './components/common/Header/Header.jsx';
import { Home } from './components/screens/Home/Home.jsx';

function App() {
	return (
		<React.StrictMode>
			<Header />
			<Home />
		</React.StrictMode>
	);
}

export default App;
