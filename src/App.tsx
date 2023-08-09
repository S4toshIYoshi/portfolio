import { Routes, Route } from 'react-router-dom';
import './globalStyle/App.css';
import HomePage from './Routing/HomePage';
import ContactPage from './Routing/ContactPage';
import AboutPage from './Routing/AboutPage';
import ProjectsPage from './Routing/ProjectsPage';
import NotFound from './Routing/NotFound';
import MainPage from './Routing/MainLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='portfolio/' element={<MainPage />}>
						<Route index={true} element={<HomePage />} />
						<Route path='contact' element={<ContactPage />} />
						<Route path='about' element={<AboutPage />} />
						<Route path='projects' element={<ProjectsPage />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
