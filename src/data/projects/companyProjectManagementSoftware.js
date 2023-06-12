// Import images
import Image1 from '../../images/web-project-1.jpg';
 
import RatioImage from '../../images/ratiolog.jpg';
 
import Art2 from '../../images/art2.png';
import gol from '../../images/gol.png';
import dit from '../../images/dit.png';
import UIImage2 from '../../images/ui-project-2.jpg';
 

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
				id: 4,
				title: 'Sudoku Solver',
				category: 'C#',
				img: UIImage2,
			},
			{
				id: 5,
				title: 'Art Comission Website',
				category: 'Java, Typescript',
				img: Art2,
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
