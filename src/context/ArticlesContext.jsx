import { useState, createContext } from 'react';
import { articleData } from '../data/articleData';

export const ArticlesContext = createContext();

export const ArticlesProvider = (props)=>{
    const [ articles, setArticles] = useState(articleData);
	const [searchArticle, setSearchArticle] = useState('');
	const [selecthArticle, setSelectArticle] = useState('');
    return (
		<ArticlesContext.Provider
			value={{
				articles,
				setArticles,
				searchArticle,
				setSearchArticle,
				 
			 
				setSelectArticle,
				 
			}}
		>
			{props.children}
		</ArticlesContext.Provider>
	); 
}
