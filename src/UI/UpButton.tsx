import { useState } from 'react';
import style from './UpButton.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import cn from 'classnames';

const UpButton = () => {
	const [distance, setDistance] = useState<number>(0);

	window.onscroll = e => {
		setDistance(distance + window.scrollY - distance);
	};
	let t: any;

	function up() {
		let top = Math.max(
			document.body.scrollTop,
			document.documentElement.scrollTop
		);

		if (top > 0) {
			window.scrollBy(0, -100);
			t = setTimeout(() => up(), 10);
		} else clearTimeout(t);
	}

	return (
		<button
			className={cn(
				style.button,
				distance >= 300 ? style.active : style.disable
			)}
			onClick={() => up()}
		>
			<IoIosArrowUp size='50' />
		</button>
	);
};

export default UpButton;
