import { useContext } from 'react';
import image from '../../../images/heading.png';
import { LanguageContext } from '../../../providers/LanguageProvider';
import style from './ImageHeading.module.scss';

const ImageHeading = () => {
	return (
		<div className={style.wrapper}>
			<img src={image} alt='heading image' />
		</div>
	);
};

export default ImageHeading;
