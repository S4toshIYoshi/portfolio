import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	padding?: string;
	className?: string;
	styles?: boolean;
};

const Card = ({
	children,
	styles = true,
	className,
	padding = '60px'
}: Props) => {
	const style = {
		borderRadius: '12px',
		padding: padding,
		background: '#000'
	};

	return (
		<div style={styles ? style : {}} className={className}>
			{children}
		</div>
	);
};

export default Card;
