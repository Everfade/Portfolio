// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/ratio.png';
import Art1 from '../images/art1.png';
import Art2 from '../images/art2.png';
import Art3 from '../images/art3.png';
import gol from '../images/gol.png';
import dit from '../images/dit.png';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
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
		img: MobileImage1
	},
	{
		id: 3,
		title: 'Internal Company Project Managment Software',
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
		category: 'Java, Angular',
		img: Art2,
	},
	{
		id: 6,
		title: 'Diterpene Classification',
		category: 'Python',
		img: dit,
	},
];
