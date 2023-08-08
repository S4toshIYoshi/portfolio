import { useContext, FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import style from './MainButton.module.scss';
import resume from '../../data/download/Kroshechkin_Nikolay.pdf';
import { LanguageContext } from '../../providers/LanguageProvider';
import Description from '../../UI/Description';

type TMainButton = {
	contact?: boolean;
	download?: boolean;
};

const MainButton: FC<TMainButton> = ({ contact = true, download = true }) => {
	const { language } = useContext(LanguageContext);

	return (
		<div className={style.button}>
			{contact && (
				<Button onClick={() => window.scroll(0, 0)}>
					<Link to='/portfolio/contact' style={{ color: '#fff' }}>
						{language === 'RU' ? 'Связаться' : 'Contact'}
					</Link>
				</Button>
			)}
			{download && (
				<div className={style.download}>
					<Button>
						<a
							href={resume}
							download='Nikolay_Kroshechkin'
							style={{ color: '#fff' }}
						>
							{language === 'RU' ? 'Скачать резюме' : 'download resume'}
						</a>
					</Button>
					<Description>.pdf</Description>
				</div>
			)}
		</div>
	);
};

export default MainButton;
