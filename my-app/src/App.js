import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddList from './AddList';
import List from './List';

function App() {
	const [lists, setLists] = useState([]);
	// 變數型態 [state變數名稱, setState函式名稱] = useState(state變數初始值)
	// 第一個是變數，等同於在class component中的this.state.lists；
	// 第二個setLists等同於(值)=>{this.setState({lists:值})}的函式
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

// class Test extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       display: "Welcome Message"
//     };
//   }

//   changeMsg() {
//     this.setState({
//       msg: "Have a Good Time!"
//     });
//   }

//   render() {
//     return (
//         <section className="welcome-msg">
//           <div className="container">
//             <div className="row">
//               <div className="msg" onClick={this.changeMsg.bind(this)}>
//               { this.state.msg }
//               </div>
//             </div>
//           </div>
//         </section>
//     );
//   }
// }
