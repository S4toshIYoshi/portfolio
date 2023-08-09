import { Routes, Route } from 'react-router-dom';
import './assets/globalStyle/App.css';
import HomePage from './Routing/HomePage';
import ContactPage from './Routing/ContactPage';
import AboutPage from './Routing/AboutPage';
import ProjectsPage from './Routing/ProjectsPage';
import NotFound from './Routing/NotFound';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='portfolio/' element={<MainLayout />}>
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
