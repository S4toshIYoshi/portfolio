import MainButton from '../mainButton/MainButton';
import AvatarSection from './AvatarSection';
import style from './Contact.module.scss';

const Contact = () => {
	return (
		<main className={style.contact}>
			<AvatarSection />
			<div style={{ marginTop: '60px' }}>
				<MainButton />
			</div>
		</main>
	);
};

export default Contact;
