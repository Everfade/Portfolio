import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';
import profileImage from '../../images/profile.jpeg';

const socialLinks = [
	{
		id: 2,
		icon: <FiGithub />,
		url: "https://github.com/Everfade",
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/realstoman',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/realstoman',
	},
];

const AppFooter = () => {
	return (
		<div className="">
			<div className="  mt-5  ">
				<img src={profileImage} className=" w-48 mx-auto rounded-full mb-10" alt="" />
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center ">
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
