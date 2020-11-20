import React, { useState } from 'react';

const AddCard = ({ addCard }) => {
	const [showInput, setShowInput] = useState(false);
	const [value, setValue] = useState('');
	return (
		<div style={{ marginTop: 8, width: 153 }}>
			{showInput ? (
				<>
					<input value={value} onChange={(e) => setValue(e.target.value)} />
					<br />
					<br />
					<button
						onClick={() => {
							// return;
							if (value) {
								addCard(value);
							}
							setValue('');
						}}
					>
						Add Card
					</button>
					{/* <button>Add Card</button> */}
					<span> </span>
					<button onClick={() => setShowInput(false)}>X</button>
				</>
			) : (
				<button onClick={() => setShowInput(true)}>＋ Add a card</button>
			)}
		</div>
	);
};

AddCard.propTypes = {};

AddCard.defaultProps = {};

export default React.memo(AddCard);
