import avatar from '../../assets/images/heading.png';
import style from './AvatarSection.module.scss';
import { LINKS_ME } from '../../data/feedback';
import Description from '../UI/Description';
import Card from '../UI/Card';

const AvatarSection = () => {
	return (
		<section className={style.wrapper}>
			<div className={style.image}>
				<img src={avatar} alt='я' width='300px' height='300px' />
			</div>

			<Card className={style.feedBackWrapepr}>
				<ul className={style.links}>
					{LINKS_ME.map((el, idx) => {
						return (
							<li key={idx}>
								<a href={el.url} target='_blank'>
									<el.Icon size={40} />
								</a>
								<Description>{el.description}</Description>
							</li>
						);
					})}
				</ul>
			</Card>
		</section>
	);
};

export default AvatarSection;
