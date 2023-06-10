import { useContext } from 'react';
import SingleArticlesContext from '../../context/SingleArticleContext';

const ArticleInfo = () => {
	const { singleArticleData } = useContext(SingleArticlesContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
	 	<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
				
					</p>
				 
			<div className="w-full sm:w-1/3 text-left">
			<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleArticleData.title}
					</p>
				 
				</div>
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{singleArticleData.abstract}
					</p>
				 
				</div>

				 
			 
				</div>

		 
			</div>

		 
	 
		 
	);
};

export default ArticleInfo;
