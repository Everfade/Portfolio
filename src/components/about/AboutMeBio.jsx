
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AppFooter from '../shared/AppFooter';

const AboutMeBio = () => {
	const { skills } = useContext(AboutMeContext);
	const { education } = useContext(AboutMeContext);
	const { experience } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20   ">
			<div className="   mb-7 sm:mb-0   ">

					<AppFooter />

			</div>


			<div>
				<h3 className="font-general-bold text-xl mb-4 text-ternary-dark dark:text-ternary-light">
					Education
				</h3>
				{education.map((el) => (
					<div className="card">
						<h2 className="date">{el.date}</h2>
						<h3 className="position">{el.place}</h3>
						<p className="description">{el.description}</p>

					</div>
				))}
			</div>
			<div>
				<h3 className="font-general-bold text-xl mb-4 text-ternary-dark dark:text-ternary-light">
					Professional Experience
				</h3>
				{experience.map((el) => (
					<div className="card">
						<div
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
							key={el.id}
						>
							{el.date} <p><span className="font-general-italic">{el.title}</span>, {el.company}, {el.location}</p>
						</div>
					</div>
				))}
			</div>

			<div >
				<h3 className="font-general-bold text-xl mb-4 text-ternary-dark dark:text-ternary-light">
					Skills
				</h3>
				<div className="card">
					{skills.map((el) => (
						<ul>
							<li
								className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
								key={el.id}
							>
								{el.skill}
							</li>

						</ul>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
