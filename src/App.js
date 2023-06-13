import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppHeader from './components/shared/AppHeader';
 
import './styles.css';
import UseScrollToTop from './hooks/useScrollToTop';
 
import ArticleDetails from './components/articles/ArticleDetails';
import ProjectDetails from './components/projects/ProjectDetails';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Articles = lazy(() => import('./pages/Articles.jsx'));

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-dark dark:bg-primary-dark transition duration-300">
				<Router    >
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route   path="/" element={<Home />} />
							<Route  path="projects" element={<Projects />} />
							<Route path="articles" element={<Articles />} />
							<Route path="/projects/:title"
								element={<ProjectDetails />}/>
							<Route path="/articles/:title"
								element={<ArticleDetails/>} />
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
				</Router>
				 
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
