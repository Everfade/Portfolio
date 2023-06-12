import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';

 
import { educationData } from '../data/educationData';
import { skillsData } from '../data/skillsData';
import { experienceData } from '../data/experienceData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	const [education, setEducation] = useState(educationData);
	const [skills, setSkills] = useState(skillsData);
	const [experience, setExperience] = useState(experienceData);

 

	 

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				 
			 
			 
				education,
				setEducation,
				skills,
				setSkills,
				experience,
				setExperience
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
