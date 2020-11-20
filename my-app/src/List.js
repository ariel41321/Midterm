import React from 'react';
import AddCard from './AddCard';
import Card from './Card';
import { useState } from 'react';

const List = ({ title }) => {
	const [cards, setCards] = useState([]);
	// 變數型態 [state變數名稱, setState函式名稱] = useState(state變數初始值)
	// 第一個是變數，等同於在class component中的this.state.lists；
	// 第二個setLists等同於(值)=>{this.setState({lists:值})}的函式
	const addCard = (title) => {
		setCards([...cards, title]);
	};
	return (
		<div
			style={{
				padding: 8,
				margin: 8,
				width: 153,
				wordWrap: 'break-word',
				border: '1px solid black',
			}}
		>
			{title}
			{cards.map((card) => (
				<Card title={card} />
			))}
			<AddCard addCard={addCard} />
		</div>
	);
};

List.propTypes = {};

List.defaultProps = {};

export default React.memo(List);
