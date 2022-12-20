import { 
	IoMedalOutline, 
	IoCardOutline,
	IoLogoTwitter, 
	IoLogoYoutube, 
	IoLogoInstagram,
	IoLogoBitcoin
} from 'react-icons/io5';
import { HiTruck } from 'react-icons/hi2';
import { FaTelegram } from 'react-icons/fa';
import Bg from '../assets/images/img (1).jfif';
import { APP_NAME } from '../config';

export const services = [
	{
		icon: <IoMedalOutline />,
		title: 'Awesome quality',
		content: `You will be satisfied with the quality of our ${APP_NAME} services`
	},
	{
		icon: <IoCardOutline />,
		title: 'Many payment options',
		content: `Good variety of payment options to choose from`
	},
	{
		icon: <IoLogoBitcoin />,
		title: 'Unbelievable prices',
		content: `Here you can purchase ${APP_NAME} services at super affordable prices!`
	},
	{
		icon: <HiTruck />,
		title: 'Very fast delivery',
		content: `We provide quick order processing and quick results.`
	}
];

export const whatWeOffer = {
	image: Bg,
	name: `Best ${APP_NAME} Panel`
};

export const packages = [
	{
		icon: <FaTelegram />,
		title: 'Buy telegram members',
		url: '#'
	},
	{
		icon: <IoLogoInstagram />,
		title: 'Buy instagram followers',
		url: '#'
	},
	{
		icon: <IoLogoTwitter />,
		title: 'Buy twitter followers',
		url: '#'
	},
	{
		icon: <IoLogoYoutube />,
		title: 'buy youtube subscribers',
		url: '#'
	}
];

export const InfoLinks = [
	{
		name: 'Telegram',
		url: '#telegram'
	},
	{
		name: 'Twitter',
		url: '#twitter'
	},
	{
		name: 'Spotify',
		url: '#spotify'
	},
	{
		name: 'Instagram',
		url: '#instagram'
	},
	{
		name: 'Facebook',
		url: '#facebook'
	},
	{
		name: 'Telugu',
		url: '#telugu'
	},
	{
		name: 'Whatsapp',
		url: '#whatsapp'
	},
	{
		name: 'Email Spam',
		url: '#email-spam'
	}
];