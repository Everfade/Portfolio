import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
			 

		 

			 
	

			 
			</div>

			{/*  Single project right section */}
		
		</div>
	);
};

export default ProjectInfo;
