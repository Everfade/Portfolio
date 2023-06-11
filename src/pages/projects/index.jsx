 
import ProjectGrid from '../components/Projects/ProjectGrid';
import { ProjectsContext } from '../context/ProjectsContext';
 
const Projects = () => {
    return (
		<ProjectsContext>
			<div className="container mx-auto">
				<ProjectGrid />
			</div>
		</ProjectsContext>
	);}

export default Projects;
