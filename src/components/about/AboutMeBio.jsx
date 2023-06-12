
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AppFooter from '../shared/ProfileDisplay';
import Button from '../reusable/Button';
const AboutMeBio = () => {
	const { skills } = useContext(AboutMeContext);
	const { education } = useContext(AboutMeContext);
	const { experience } = useContext(AboutMeContext);

	return (
		<div>
		<div className="block sm:flex md:flex sm:gap-10 mt-10 sm:mt-20    ">
			<div className="mb-7 sm:mb-0">
				<AppFooter />
			</div>
			<div className=' bg-secondary-dark rounded-lg mb-2'>
				<h3 className="font-general-bold text-2xl mb-4 ml-2 mt-2 text-ternary-dark dark:text-ternary-light text-center">
					Education
				</h3>
				<hr class="w-auto h-1 mx-auto my-4 bg-primary-dark border-0 rounded md:my-4 dark:bg-gray-700"></hr>
				{education.map((el) => (
					<div className="card mb-4 ml-4 mr-4 text-ternary-dark dark:text-ternary-light text-lg  ">
						<span  className="date italic font-general-bold text-md ">{el.date}</span >
						<h3 className="position font-general text-lg">{el.place}</h3>
						<p className="description">{el.description}</p>

					</div>
				))}
			</div>
			<div className=' bg-secondary-dark rounded-lg mb-2'>
				<h3 className="font-general-bold text-2xl  ml-2 mt-2 text-ternary-dark dark:text-ternary-light text-center">
					Work Experience
					
				</h3>
				<hr class="w-auto h-1 mx-auto my-4 mb-4 bg-primary-dark border-0 rounded md:my-4 dark:bg-gray-700"></hr>
				{experience.map((el) => (
					<div className="card mt-2 ml-4 mr-4"  >
						<div className="card mb-4 ml-4 mr-4 text-ternary-dark dark:text-ternary-light text-lg" key={el.id}>
							<span className=' date italic font-general-bold text-md'>{el.date} </span>
							<p>
								<span className="  font-general text-lg ">{el.title}</span></p>
						</div>
					</div>
				))}
			</div>
	
			</div>
			<div className="bg-secondary-dark rounded-lg mb-2 flex flex-col lg:flex-row lg:flex-wrap  ">
  <h3 className="font-general-bold text-2xl ml-2 mt-4 mr-2 text-ternary-dark dark:text-ternary-light sm:text-center">
    Skills
  </h3>
  <hr class="w-auto h-1 mx-auto my-4 bg-primary-dark border-0 rounded md:my-4 dark:bg-gray-700"></hr>
  <hr className="w-auto h-1 mx-auto my-2 bg-primary-dark border-0 rounded md:my-4 dark:bg-gray-700 mb-4"></hr>
  {skills.map((el) => (
    <div className="card mb-2 ml-4 mr-4 mt-4 text-ternary-dark dark:text-ternary-light text-lg" key={el.id} >
      <div className="mb-2 text-ternary-dark dark:text-ternary-light text-lg  md:text-center sm:text-center lg:text-center">
        {el.skill}
        <p><span className="font-general-italic ">{el.title}</span></p>
      </div>
    </div>
  ))}
</div>


			<div className="   
      font-general-medium button   px-1 py-3 rounded-lg shadow-lg hover:shadow-xl text-center
       bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white
        text-lg sm:text-xl duration-30 max-w-sm mx-auto mt-4  cursor-pointer">
    <Button  title="Download CV" />
    </div>
		</div>
	);
};

export default AboutMeBio;
