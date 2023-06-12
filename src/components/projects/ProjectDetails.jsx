import { useContext } from 'react';
import React from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Button from '../reusable/Button';
import ProjectRelatedProjects from './ProjectRelatedProjects';
import ProjectSingleHeader from './ProjectHeader';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

function convertToCamelCase(str) {
	const words = str.split('-');
	const camelCaseWords = words.map((word, index) => {
	  if (index === 0) {
		return word;
	  }
	  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
	  return capitalizedWord;
	});
	const camelCaseString = camelCaseWords.join('');

	 
	return camelCaseString;
  }
const ProjectDetails = () => {
	function navigateToGit(url) {
		console.log(url)
		window.location.assign(url);
	  }
	const navigate = useNavigate();
	let { title } = useParams();
	 
	const import_title=convertToCamelCase(title)

	const singleProjectData =   require("../../data/projects/"+import_title).singleProjectData;
 
	//const project = singleProjectData.find(project => project.ProjectHeader.title.toLowerCase() === title);
 

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
	
		<div>
			<ProjectSingleHeader parentToChild={singleProjectData}></ProjectSingleHeader>	
		<div className='flex flex-auto mt-10'>
		<div className='max-w-md mr-14 ml-10 h-fit'>
		<Carousel  width={"30rem"}  showArrows={true}  >
	 
			{singleProjectData.ProjectImages.map((project) => {
				 
				return (
					<div className=" mb-10 sm:mb-0" key={project.id}>
						<img 
							src={project.img}
							className="rounded-xl cursor-pointer 
							shadow-lg sm:shadow-non  "
							alt={project.title}
							key={project.id}
						/>
					</div>
				);
			})}
		 
	       </Carousel>
		   <div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>
		   </div>
		   <div className="w-full sm:w-2/3  mt-10 sm:mt-1      ">
				<p className="font-general-regular text-primary-dark
				 dark:text-primary-light text-4xl font-semi-bold mb-7 text-center">
					Description
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-xl text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
	
		   </div>
		
		   {singleProjectData.ProjectInfo.gitUrl !== 'None' &&   <div onClick={()=>navigateToGit(singleProjectData.ProjectInfo.gitUrl)}
		    className="font-general-medium button px-1 py-3 mb-4 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-30 max-w-sm mx-auto cursor-pointer text-center">
 
    <button>Checkout Github</button>
 
</div>}
				 
				 
				 </div> 	</motion.div>);
};

export default ProjectDetails;

  
 
  