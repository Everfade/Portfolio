import React from 'react';
import { useParams } from 'react-router-dom';
import { articleData } from '../../data/articleData';
import Button from '../reusable/Button';
import { motion } from 'framer-motion';
import Pdf1 from "./paperPdfs/die-verteilung-der-primzahlen-und-ihr-zusammenhang-mit-der-riemannschen-zetafunktion.pdf";
import { useRef } from 'react';
import Pdf2 from "./paperPdfs/effects-of-image-resolution-on-accuracy-and-robustness-in-cnns-and-smoothed-classifiers.pdf";
import Pdf3 from "./paperPdfs/on-free-will-and-bell’s-theorem-misconceptions.pdf";




// Create new plugin instance
 
const ArticleDetails = ( ) => {
    const anchorRef = useRef(null);

  const downloadPDF = () => {
    window.open(Pdf);
  };

  
   
  let { title } = useParams();
  const formated_title=title.replaceAll("-", ' ')
 
  let Pdf=null
  if(title.includes("prim")){
    Pdf=Pdf1
  }
  else if( title.includes("robustness")){
    Pdf=Pdf2
  }
  else if( title.includes("bell’s")){
    Pdf=Pdf3
  }
  // Find the article with the matching title from articleData
  const article = articleData.find(article => article.title.toLowerCase() === formated_title);
  //PDF
 

  if (!article) {
    return <div>Article not found :/</div>;
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, delay: 1 }}
    transition={{
        ease: 'easeInOut',
        duration: 0.6,
        delay: 0.15,
    }}
    className="container mx-auto mt-5 sm:mt-10"
>
<div className="flex items-center justify-center">
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
            <img className="rounded-lg w-72  mx-auto"  src={article.cover} alt="Article Cover"/>
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
    
        <div className="mb-4">
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
          
      <div onClick={downloadPDF}  className="    
      font-general-medium button   px-1 py-3 rounded-lg shadow-lg hover:shadow-xl
       bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white
        text-lg sm:text-xl duration-30 max-w-sm mx-auto  cursor-pointer mb-8 mt-4">
	 
					<Button title="View Paper" />
				 
    </div>
    	</div>
    
      </div>
 
      </motion.div>)
};

export default ArticleDetails;