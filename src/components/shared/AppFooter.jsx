import {
	FiGithub,
} from 'react-icons/fi';
import profileImage from '../../images/profile.jpeg';

const socialLinks = [
	{
		id: 2,
		icon: <FiGithub />,
		url: "https://github.com/Everfade",
	},
 
];

const AppFooter = () => {
	return (
		<div className="">
			<div className="  mt-5  ">
				<img src={profileImage} className="object-cover h-64 w-40 mx-auto rounded-full mb-10 overflow-hidden" alt="" />
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
