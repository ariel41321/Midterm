import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddList from './AddList';
import List from './List';

function App() {
	const [lists, setLists] = useState([]);
	const addList = (title) => {
		setLists([...lists, title]);
	};
	return (
		<div style={{ display: 'flex' }}>
			{lists.map((list) => (
				<List title={list} />
			))}
			<AddList addList={addList} />
		</div>
	);
}

export default App;

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Hi Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;
