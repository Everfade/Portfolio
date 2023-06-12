// Import images
import Image1 from '../../images/ratiolog.jpg';
import Image2 from '../../images/ratio1s-transformed.jpeg';
import Image3 from '../../images/ratio3s-transformed.jpeg';
 
 
 
import Art2 from '../../images/art2.png';
import gol from '../../images/gol.png';
import dit from '../../images/dit.png';
import UIImage1 from '../../images/ui-project-1.jpg';
import UIImage2 from '../../images/ui-project-2.jpg';
 
export const singleProjectData = {
	ProjectHeader: {
		title: 'Rectangle Ration Analyzer',
		publishDate: ' 2021',
		tags: 'Android App',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
	 gitUrl:"https://github.com/Everfade/RatioCalculatorApp",
  Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Android',
					'Kotlin',
					'OpenCV',
					'XML',
				 
		 
				],
			},
		],
		ProjectDetailsHeading: 'Descrption',
		ProjectDetails: [
			{
				id: 1,
				details:
					'A android app written in Kotlin that is capable of determining the width to height ratio of any rectangular shape of an image captured live in the app or from the gallery.',
			},
			{
				id: 2,
				details:
					"This was achieved using open-cv image processing library to performe edge detection and feature extraction. Flexible threshold selection allowed the algoirthm to be sucessful in many different light enviorments"
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
