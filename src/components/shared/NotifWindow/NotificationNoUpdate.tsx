import React from 'react';
import style from './Style.module.scss';
import { TbInfoCircle } from 'react-icons/tb';

const NotificationNoUpdate = () => {
	return (
		<div className={style.Notification}>
			<p>
				Из за того что у меня мало времени полностью обновить сайт, тут может
				быть устаревшая информация
			</p>
			<TbInfoCircle size={100} />
		</div>
	);
};

export default NotificationNoUpdate;
