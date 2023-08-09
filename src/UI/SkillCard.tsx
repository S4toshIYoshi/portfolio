import { FC } from 'react';
import { TSkills } from '../data/skills';

const SkillCard: FC<TSkills> = ({ skill, color, colorText }) => {
	return (
		<div
			style={{
				background: `${color}`,
				color: colorText ? colorText : '#FFF',
				padding: '10px 15px',
				borderRadius: '20px'
			}}
		>
			{skill}
		</div>
	);
};

export default SkillCard;
