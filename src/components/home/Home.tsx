import AboutSection from './aboutSection/AboutSection';
import FeedBack from './feedBackSection/FeedBack';
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
			{/*<FeedBack />*/}
		</div>
	);
};

export default Home;
