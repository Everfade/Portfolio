import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArticleSingle = ({ title, abstract, cover }) => {
	const urlRegex = /\s/g;
    const url_title = title.toLowerCase().replace(urlRegex, '-');
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>  <Link to={`/articles/${encodeURIComponent(url_title)}`}>
		 
				<div    className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer
				 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark ">
						<div className="text-center px-2 py-2">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
				 
					</div>
					<div className="  ">
						<img
							src={cover}
							className="   rounded-lg  mx-auto"
							alt="Single Article"
						/>
					</div>
				
					<div className="text-center px-2 py-2">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							 
						</p>
				 
					</div>
				</div>
				
			</Link>
	
		</motion.div>

	);
};

export default ArticleSingle;
