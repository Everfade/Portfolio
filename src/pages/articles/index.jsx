 
import ArticleGrid from '../components/articles/ArticleGrid';
import { ArticlesProvider } from '../context/ArticlesContext';
 
const Articles = () => {
    return (
		<ArticlesProvider>
			<div className="container mx-auto">
				<ArticleGrid />
			</div>
		</ArticlesProvider>
	);}

export default Articles;
