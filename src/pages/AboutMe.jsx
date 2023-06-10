import AboutMeBio from '../components/about/AboutMeBio';

import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<div
				className="container mx-auto"
			>
				<AboutMeBio />
			</div>
		</AboutMeProvider>
	);
};

export default About;
