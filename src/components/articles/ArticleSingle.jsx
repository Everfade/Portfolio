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
		 
		 <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer
				 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark ">
					<div className="">
						<img
							src={cover}
							className="object-cover w-80 h-80  rounded-t-s overflow-hidden border-none mx-auto py-5 hover:scale-105  ease-in duration-500  "
							alt="Single Project"
						/>
					</div>
					<div  className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer
				 mb-10 sm:mb-0   bg-custom-c">
					<div className="text-center px-4 py-5">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
					 
					</div>
					</div>
				</div>
				
			</Link>
	
		</motion.div>

	);
};

export default ArticleSingle;
