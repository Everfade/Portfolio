import { useState, createContext } from 'react';
import { articleData } from '../data/articleData';

export const ArticlesContext = createContext();

export const ArticlesProvider = (props)=>{
    const [ articles, setArticles] = useState(articleData);
	const [searchArticle, setSearchArticle] = useState('');
	const [selectArticle, setSelectArticle] = useState('');
    return (
		<ArticlesContext.Provider
			value={{
				articles,
				setArticles,
				searchArticle,
				setSearchArticle,
				selectArticle,
				 
			 
				setSelectArticle,
				 
			}}
		>
			{props.children}
		</ArticlesContext.Provider>
	); 
}
