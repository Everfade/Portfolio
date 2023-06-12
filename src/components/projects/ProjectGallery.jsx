import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';
import Button from '../reusable/Button';
const ProjectGallery = () => {
	 

	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
		<div className='flex flex-auto mt-10'>
		<div className='max-w-md mr-14'>
		<Carousel  width={"30rem"}  showArrows={true}  >
	 
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className=" mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
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
				 dark:text-primary-light text-2xl font-bold mb-7 text-center">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
	
		   </div>
		   		<div className="   
				   font-general-medium button   px-1 py-3 rounded-lg shadow-lg hover:shadow-xl
					bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white
					 text-lg sm:text-xl duration-30 max-w-sm mx-auto  cursor-pointer text-center">
				 <Button  title="Checkout Github" />
				 </div></div> );
};

export default ProjectGallery;
