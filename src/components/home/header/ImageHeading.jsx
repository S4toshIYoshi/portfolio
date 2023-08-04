import { useContext } from 'react';
import image from '../../../images/heading.png';
import { LanguageContext } from '../../../providers/LanguageProvider';

const ImageHeading = () => {
	const { language } = useContext(LanguageContext);

	return (
		<div style={{ width: language === 'RU' ? '80%' : '66.5%' }}>
			<img src={image} alt='heading image' />
		</div>
	);
};

export default ImageHeading;
