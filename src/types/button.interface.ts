import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
}

export interface IButtonLink {
	url: string;
	className?: string;
	children: ReactNode;
}
