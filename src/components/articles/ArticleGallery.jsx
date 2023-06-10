import { useContext } from 'react';
import singleArticleContext from '../../context/singleArticleContext';

const ArticleGallery = () => {
	const { singleArticleData } = useContext(singleArticleContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleArticleData.ProjectImages.map((article) => {
				return (
					<div className=" mb-10 sm:mb-0" key={article.id}>
						<img
							src={article.img}
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
