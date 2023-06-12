// Import images
import Image1 from '../../images/art1.png';
import Image2 from '../../images/art2.png';
import Image3 from '../../images/art3.png';
 
import RatioImage from '../../images/ratiolog.jpg';
import gol from '../../images/gol.png';
import dit from '../../images/dit.png';
import UIImage1 from '../../images/ui-project-1.jpg';
import UIImage2 from '../../images/ui-project-2.jpg';
 
 
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
		title: 'Other Projects',
		Projects: [
			{
				id: 1,
				title: 'Game of Life',
				category: 'C#',
				img: gol,
				ProjectHeader: {
					title: 'Project Management UI - From Context',
					publishDate: 'Jul 26, 2021',
					tags: 'UI / Frontend',
				},
			},
			{
				id: 2,
				title: 'Aspect Ratio Analyzer',
				category: 'Kotlin',
				img: RatioImage
			},
			{
				id: 3,
				title: 'Company Project Management Software',
				category: 'ASP.NET',
				img: UIImage1,
			},
			{
				id: 4,
				title: 'Sudoku Solver',
				category: 'C#',
				img: UIImage2,
			},
		 
			{
				id: 6,
				title: 'Diterpene Classification',
				category: 'Python',
				img: dit,
			},
		],
	},
};
