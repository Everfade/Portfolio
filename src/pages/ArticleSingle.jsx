import ArticleGallery from '../components/article/ArticleGallery';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleInfo from '../components/article/ArticleInfo';
 
import { SingleArticleProvider } from '../context/SingleArticleContext';
import { motion } from 'framer-motion';

const ArticleSingle = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleArticleProvider>
				<ArticleHeader />
				<ArticleGallery />
				<ArticleInfo />
			 
			</SingleArticleProvider>
		</motion.div>
	);
};

export default ArticleSingle;
