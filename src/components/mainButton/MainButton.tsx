import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import style from './MainButton.module.scss';
import resume from '../../data/download/Kroshechkin_Nikolay.pdf';
import { LanguageContext } from '../../providers/LanguageProvider';
import Description from '../../UI/Description';

type Props = {};

const MainButton = (props: Props) => {
	const { language } = useContext(LanguageContext);

	return (
		<div className={style.button}>
			<Button>
				<Link to='/portfolio/contact' style={{ color: '#fff' }}>
					{language === 'RU' ? 'Связаться' : 'Contact'}
				</Link>
			</Button>
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
		</div>
	);
};

export default MainButton;
