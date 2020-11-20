import React, { useState } from 'react';

const AddList = ({ addList }) => {
	const [showInput, setShowInput] = useState(false);
	const [value, setValue] = useState('');
	return (
		<div
			style={{ padding: 8, margin: 8, width: 153, border: '1px solid black' }}
		>
			{showInput ? (
				<>
					<input value={value} onChange={(e) => setValue(e.target.value)} />
					<br />
					<br />
					<button
						onClick={() => {
							return;
							if (value) {
								addList(value);
							}
							setValue('');
						}}
					>
						Add List
					</button>{' '}
					<button onClick={() => setShowInput(false)}>X</button>
				</>
			) : (
				<button onClick={() => setShowInput(true)}>＋ Add a list</button>
			)}
		</div>
	);
};

AddList.propTypes = {};

AddList.defaultProps = {};

export default React.memo(AddList);
