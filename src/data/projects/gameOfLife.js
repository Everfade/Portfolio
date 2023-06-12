// Import images
import Image1 from '../../images/gol.png';
import Image2 from '../../images/ratio2.jpg';
import Image3 from '../../images/ratio3.jpg';
import Image4 from '../../images/mobile-project-1.jpg';
import Image5 from '../../images/web-project-1.jpg';
import Image6 from '../../images/ui-project-2.jpg';
 
// Import icons
 

export const singleProjectData = {
	ProjectHeader: {
		title: 'Game of Life',
		publishDate: '  2017',
		tags: 'Desktop App',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
 
	],
	ProjectInfo: {
		gitUrl:"https://github.com/Everfade/RatioCalculatorApp",
  Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'C#',
					'WPF',
				 
		 
				],
			},
		],
		ProjectDetailsHeading: 'Descrption',
		ProjectDetails: [
			{
				id: 1,
				details:
					'A simple implementation of John Conways famous game of life cellular automata rule in C#.',
			},
			{
				id: 2,
				details:
					'Game of Life is a prime example how simple rules can give rise to complexity. With only 3 imple rules this sytem is already proven to be Turing complete.',
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
