import React from 'react';
import ReactDOM from 'react-dom/client';
import './globalStyle/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import LanguageProvider, {
	LanguageContext
} from './providers/LanguageProvider';

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
