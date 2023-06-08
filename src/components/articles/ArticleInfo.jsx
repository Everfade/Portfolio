import { useContext } from 'react';
import SingleArticleContext from '../../context/SingleArticleContext';

const ArticleInfo = () => {
	const { singleArticletData } = useContext(SingleArticleContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
		 
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{singleArticletData.ArticleInfo}
					</p>
				 
				</div>

				 
				<div className="mb-7">
		 
				</div>
				</div>

		 
			</div>

		 
	 
		 
	);
};

export default ArticleInfo;
