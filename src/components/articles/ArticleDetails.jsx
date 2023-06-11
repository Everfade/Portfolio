import React from 'react';
import { useParams } from 'react-router-dom';
import { articleData } from '../../data/articleData';
import Button from '../reusable/Button';
const ArticleDetails = ( ) => {
  let { title } = useParams();
  title=title.replaceAll("-", ' ')
 
  // Find the article with the matching title from articleData
  const article = articleData.find(article => article.title.toLowerCase() === title);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
  
<div className="flex items-center justify-center h-screen">
    <div className="text-center">
        <div className="mb-7">
            <p className="font-general-regular text-4xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                {article.title}
            </p>
        </div>
        <div className="mb-7 flex justify-center">
    <div className="font-general-regular text-2xl text-ternary-dark dark:text-ternary-light mb-2">
        <span className="flex align-content">
        <span className="font-general-regular mb-2 text-lg text-ternary-dark dark:text-ternary-light" >By&nbsp;&nbsp; </span>
            {article.authors.map((name, index) => {
                return (
                    <React.Fragment key={index}>
                        <p className="font-general-regular mb-2 text-lg text-ternary-dark dark:text-ternary-light">
                            {name}
                        </p>
                        {index !== article.authors.length - 1 && <span className="font-general-regular mb-2 text-lg text-ternary-dark dark:text-ternary-light" >,&nbsp;&nbsp; </span>}
                    </React.Fragment>
                );
            })}
              <span className="font-general-regular mb-2 text-lg text-ternary-dark dark:text-ternary-light" >&nbsp; &nbsp;- {article.year} </span>
        </span>
    </div>
</div>
        <div className=" text-center mb-4">
            <img className="rounded-lg w-94  mx-auto"  src={article.cover} alt="Article Cover"/>
        </div>

        <div className="mb-7 flex flex-col items-center justify-center ">
            <div>   <p className="font-general-regular text-4xl
              text-ternary-dark dark:text-ternary-light mb-2">Abstract</p></div>
         
             <div  className="w-full sm:w-2/3  mt-10 sm:mt-1  ">
			 		<p className="font-general-regular mb-5 text-lg t text-ternary-dark dark:text-ternary-light">
							{article.abstract}
						</p>
			</div>
        </div>
    
        <div className="">
				<p className="font-general-regular text-primary-dark
         dark:text-primary-light text-2xl font-bold mb-5">
					Keywords
				</p>
				{article.keywords.map((keyword) => {
					return (
						<p className="font-general-regular mb-2 text-lg text-ternary-dark
             dark:text-ternary-light">
							{keyword}
						</p>
					);
				})}
			</div>

      <div className="   
      font-general-medium button   px-1 py-3 rounded-lg shadow-lg hover:shadow-xl
       bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white
        text-lg sm:text-xl duration-30 max-w-md mx-auto  cursor-pointer">
    <Button  title="Download PDF" />
    </div>
    	</div>
      </div>
 
  );
};

export default ArticleDetails;