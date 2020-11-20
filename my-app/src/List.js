import React from 'react';

const List = ({ title }) => {
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
		</div>
	);
};

List.propTypes = {};

List.defaultProps = {};

export default React.memo(List);
