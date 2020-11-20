import React from 'react';

const Card = ({ title }) => {
	return (
		<div
			style={{
				padding: 8,
				margin: '8px 0',
				wordWrap: 'break-word',
				border: '1px solid black',
			}}
		>
			{title}
		</div>
	);
};

Card.propTypes = {};

Card.defaultProps = {};

export default React.memo(Card);
