import { useContext } from 'react';
import style from './AboutSection.module.scss';
import image from '../../../images/feedBack.png';
import ButtonVector from '../../UI/ButtonVector';
import Heading from '../../UI/Heading';
import Description from '../../UI/Description';
import { LanguageContext } from '../../../providers/LanguageProvider';
import { ABOUT_BRIEFLY } from '../../../data/about';
import { Link } from 'react-router-dom';

const AboutSection = () => {
	const { language } = useContext(LanguageContext);

	const dataDescription: string[] =
		language === 'RU'
			? ABOUT_BRIEFLY.descriptionRu
			: ABOUT_BRIEFLY.descriptionEn;

	return (
		<section className={style.aboutSection}>
			<div className={style.content}>
				<Link to='./about'>
					<ButtonVector onClick={() => window.scroll(0, 0)}>
						{language === 'RU' ? 'Узнать больше' : 'learn more'}
					</ButtonVector>
				</Link>
				<Heading>
					{language === 'RU' ? ABOUT_BRIEFLY.nameRu : ABOUT_BRIEFLY.nameEn}
				</Heading>
				<div className={style.wrapperDescription}>
					{dataDescription.map((el, idx) => {
						return <Description key={idx}>{el}</Description>;
					})}
				</div>
			</div>
			<div className={style.image}>
				<img src={image} alt='my photo' />
			</div>
		</section>
	);
};

export default AboutSection;
