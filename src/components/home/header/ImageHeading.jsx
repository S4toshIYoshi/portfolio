import image from '../../../assets/images/heading.png';
import style from './ImageHeading.module.scss';

const ImageHeading = () => {
	return (
		<div className={style.wrapper}>
			<img src={image} alt='heading image' />
		</div>
	);
};

export default ImageHeading;
