import { useState, createContext } from 'react';
import {  articleData as singleArticleDataJson } from '../data/articleData';

const SingleArticleContext = createContext();

export const SingleArticleProvider = ({ children }) => {
	const [singleArticleData, setSingleArticleData] = useState(
		singleArticleDataJson
	);

	return (
		<SingleArticleContext.Provider
			value={{ singleArticleData, setSingleArticleData }}
		>
			{children}
		</SingleArticleContext.Provider>
	);
};
 export default SingleArticleContext;
 
