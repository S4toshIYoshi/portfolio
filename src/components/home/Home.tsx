import AboutSection from './aboutSection/AboutSection';
import Header from './header/Header';
import RecentProjects from './projectsSection/RecentProjects';
import SkillSetSection from './skillSetSection/SkillSetSection';

const Home = () => {
	return (
		<div>
			<Header />
			<RecentProjects />
			<AboutSection />
			<SkillSetSection />
		</div>
	);
};

export default Home;
