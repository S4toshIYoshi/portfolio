import React from 'react';
import ReactDOM from 'react-dom/client';
import './globalStyle/index.css';
import App from './App';
import LanguageProvider from './providers/LanguageProvider';

const Root: ReactDOM.Root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
Root.render(
	<React.StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</React.StrictMode>
);
