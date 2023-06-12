import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ArticleSingle from './ArticleSingle';
import { ArticlesContext } from '../../context/ArticlesContext';
import ArticlesFilter from '../../components/articles/ArticlesFilter'

 const ArticleGrid = () => {
	const {
		articles,
			 
				searchArticle,
				setSearchArticle,
				searchArticlesByTitle,
				selectArticlesByCategory,
				selectArticle,
				setSelectArticle,   
	} = useContext(ArticlesContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Articles
				</p>
			 
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
			 < p>My papers</p>
				</h3>
				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
			 

				 
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{selectArticle
					? selectArticlesByCategory.map((article) => (
							<ArticleSingle
								title={article.title}
								abstract={article.abstract}
								cover={article.cover}
								key={article.id}
							/>
					  ))
					: searchArticle
					? searchArticlesByTitle.map((article) => (
                        <ArticleSingle
                        title={article.title}
                        abstract={article.abstract}
                        cover={article.cover}
                        key={article.id}
                    />
					  ))
					: articles.map((article) => (
                        <ArticleSingle
                        title={article.title}
                        abstract={article.abstract}
                        cover={article.cover}
                        key={article.id}
                    />
					  ))}
			</div>
		</section>
				 
	);
};

export default ArticleGrid;
