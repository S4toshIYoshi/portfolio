import React from 'react';
import ReactDOM from 'react-dom/client';
import './globalStyle/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider, {
	LanguageContext
} from './providers/LanguageProvider';

const Root: ReactDOM.Root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
Root.render(
	<React.StrictMode>
		<LanguageProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</LanguageProvider>
	</React.StrictMode>
);
