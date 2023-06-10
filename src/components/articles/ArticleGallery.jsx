import { useContext } from 'react';
import SingleArticleContext from '../../context/SingleArticleContext';

const ArticleGallery = () => {
	const { singleArticleData } = useContext(SingleArticleContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleArticleData.map((article) => {
				console.Console("LOG" +article)
				return (
			
					<div className=" mb-10 sm:mb-0" key={article.id}>
								<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
					{article.title}
				</p>
						<img
							src={article.cover}
							className=" rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={article.title}
							key={article.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ArticleGallery;
