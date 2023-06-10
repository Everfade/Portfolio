import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArticleSingle = ({ title, abstract, cover }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to="/articles/single-article" aria-label="Single Article">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer
				 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark ">
					<div className="containerGallery">
						<img
							src={cover}
							className=" rounded-t-xl border-none"
							alt="Single Article"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{abstract}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ArticleSingle;
