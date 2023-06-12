// Import images
import Image1 from '../../images/art1.png';
import Image2 from '../../images/art2.png';
import Image3 from '../../images/art3.png';
import Image4 from '../../images/mobile-project-1.jpg';
import Image5 from '../../images/web-project-1.jpg';
import Image6 from '../../images/ui-project-2.jpg';
// Import images
 
export const singleProjectData = {
	ProjectHeader: {
		title: 'Art Commision Website',

		publishDate: '2022',
		tags: 'Full Stack',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	 
	],
	ProjectInfo: {
		 githubUrl:'https://github.com/Everfade/Art_Commission_Website' ,
	 
  Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					
					'Java',
					'Typescript',
					'SQS',
					'CSS',
					'Spring-Boot',
					'Angular',
					'JPA',
				],
			},
		],
		

		ProjectDetailsHeading: 'Description',
		ProjectDetails: [
			{
				id: 1,
				details:
					'A great learning opertunity as this group project was conducted from start to finsih with the oversight of very experienced univerity members. It followed several best pratices across various development cycle phases agile development to customer oriented requierment design, robust testing etc.'
			},
			{
				id: 2,
				details:
					'The result was an art comission website with automatic data generation, reactive frontend, user login, profile management, pay service and many other features.',
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
