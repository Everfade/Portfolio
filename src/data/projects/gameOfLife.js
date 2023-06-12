// Import images
import Image1 from '../../images/gol.png';
 
import RatioImage from '../../images/ratiolog.jpg';
import Art2 from '../../images/art2.png';
import dit from '../../images/dit.png';
import UIImage1 from '../../images/ui-project-1.jpg';
import UIImage2 from '../../images/ui-project-2.jpg';

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
		title: 'Other Projects',
		Projects: [
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
