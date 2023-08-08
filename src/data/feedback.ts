import { IconType } from 'react-icons';
import { SlSocialVkontakte } from 'react-icons/sl';
import {
	BsTelegram,
	BsDiscord,
	BsFillTelephoneFill,
	BsTelephone
} from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { SiCodewars, SiGmail } from 'react-icons/si';

export interface ILinkFeedBack {
	Icon: IconType;
	description?: string;
	url: string;
}

export const LINKS_ME: ILinkFeedBack[] = [
	{
		Icon: SlSocialVkontakte,
		description: 'Николай Крошечкин',
		url: 'https://m.vk.com/kroshechkin1'
	},
	{
		Icon: BsTelegram,
		description: '@memphisusr',
		url: 'https://t.me/memphisusr'
	},
	{
		Icon: AiFillGithub,
		description: 'SatoshiYoshi',
		url: 'https://github.com/S4toshIYoshi'
	},
	{
		Icon: SiCodewars,
		description: 'Dery456',
		url: 'https://www.codewars.com/users/Dery456'
	},
	{
		Icon: BiLogoGmail,
		description: 'nkroshechkin@gmai.com',
		url: 'mailto:nkroshechkin@gmai.com'
	},
	{
		Icon: BsDiscord,
		description: 'memphis2',
		url: 'https://discordapp.com/users/439781005943898125/'
	},
	{
		Icon: BsTelephone,
		description: '+7(901)-271-83-78',
		url: 'tel:89012718378'
	}
];

export const LINKS_FOOTER: ILinkFeedBack[] = [
	{
		Icon: SlSocialVkontakte,
		description: 'Николай Крошечкин',
		url: 'https://m.vk.com/kroshechkin1'
	},
	{
		Icon: BsTelegram,
		description: '@memphisusr',
		url: 'https://t.me/memphisusr'
	},
	{
		Icon: BiLogoGmail,
		description: 'nkroshechkin@gmai.com',
		url: 'mailto:nkroshechkin@gmai.com'
	},
	{
		Icon: BsTelephone,
		description: '+7(901)-271-83-78',
		url: 'tel:89012718378'
	}
];
