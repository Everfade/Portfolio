// Import images
import Image1 from '../../images/web-project-1.jpg';
import Image2 from '../../images/art2.png';
import Image3 from '../../images/art3.png';
import Image4 from '../../images/mobile-project-1.jpg';
import Image5 from '../../images/web-project-1.jpg';
import Image6 from '../../images/ui-project-2.jpg';
// Import images
 
 

export const singleProjectData = {
	ProjectHeader: {
		title: 'Internal Company Managment Software',
		publishDate: 'Summer 2018',
		tags: 'Full Stack',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
 
	 
	],
	ProjectInfo: {
		gitUrl:"None",
  Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'C#',
					'SQS',
					'ASP.Net',
					'HTML',
					'JavaScript',
					'CSS',
				],
			},
		],
		ProjectDetailsHeading: 'Descrption',
		ProjectDetails: [
			{
				id: 1,
				details:
					'A ASP.Net solution intended to act as a project managment solution for company internal team managers and their tasks. It offerd basic CRUD functionality as well as a custom implemented dynamic time line generation and a seperate view for easy data managment.'
			},
	 
		 
		 
		],
		 
		 
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
