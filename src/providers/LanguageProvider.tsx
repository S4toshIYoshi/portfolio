import React, { ReactNode, createContext, useState } from 'react';

export type TLangContent = {
	language: string;
	setLanguage: (c: string) => void;
};

export const LanguageContext = createContext<TLangContent>({
	language: 'RU',
	setLanguage: () => {}
});

type TLangProvider = {
	children: ReactNode;
};

const LanguageProvider = ({ children }: TLangProvider) => {
	const [language, setLanguage] = useState<string>('RU');
	console.log(language);
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageProvider;
