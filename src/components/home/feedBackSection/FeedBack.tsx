import React, { useContext } from 'react';
import style from './FeedBack.module.scss';
import Card from '../../../UI/Card';
import Marking from '../../../UI/Marking';
import { LanguageContext } from '../../../providers/LanguageProvider';
import { TData } from './data.type';
import Heading from '../../../UI/Heading';
import { SiGmail, SiTelegram } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Description from '../../../UI/Description';
import Button from '../../../UI/Button';

const FeedBack = () => {
	const { language } = useContext(LanguageContext);

	const data: TData = {
		marking: 'Обратная связь',
		heading: 'Свяжись со мной',
		button: 'скачать резюме'
	};

	if (language === 'EN') {
		data.marking = 'Feedback';
		data.heading = 'Contact Me';
		data.button = 'download resume';
	}

	return (
		<section className={style.feedBack}>
			<Card className={style.card}>
				<div className={style.wrapper}>
					<div className={style.heading}>
						<Marking>{data.marking}</Marking>
						<Heading>{data.heading}</Heading>
					</div>
				</div>
				<div className={style.contactInfo}>
					<div>
						<SiGmail fill='#fff' />{' '}
						<Description>nkroshechkin@gmail.com</Description>
					</div>
					<div>
						<SiTelegram fill='#fff' /> <Description>@memphisusr</Description>
					</div>

					<div>
						<BsFillTelephoneFill fill='#fff' />{' '}
						<Description>+79012718378</Description>
					</div>
					<div className={style.download}>
						<Button>{data.button}</Button>
						<Description>.pdf</Description>
					</div>
				</div>
			</Card>
		</section>
	);
};

export default FeedBack;
