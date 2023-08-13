import { useContext, FC } from 'react';
import Button from '../../UI/Button';
import style from './MainButton.module.scss';
import resume from '../../../assets/download/Cv_Kroshechkin_Nikolay.pdf';
import { LanguageContext } from '../../../providers/LanguageProvider';
import Description from '../../UI/Description';
import ButtonLink from '../../UI/ButtonLink';

type TMainButton = {
	contact?: boolean;
	download?: boolean;
};

const MainButton: FC<TMainButton> = ({ contact = true, download = true }) => {
	const { language } = useContext(LanguageContext);

	return (
		<div className={style.button}>
			{contact && (
				<ButtonLink url='/portfolio/contact'>
					{language === 'RU' ? 'Связаться' : 'Contact'}
				</ButtonLink>
			)}
			{download && (
				<div className={style.download}>
					<a
						href={resume}
						download='Nikolay_Kroshechkin'
						style={{ color: '#fff' }}
					>
						<Button>
							{language === 'RU' ? 'Скачать резюме' : 'download resume'}
						</Button>
					</a>
					<Description>.pdf</Description>
				</div>
			)}
		</div>
	);
};

export default MainButton;
