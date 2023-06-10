const selectOptions = [
	"artificial intelligence",
	 "society",
	  "automation",
	  "ethics",
	   "technology"
];

const ArticlesFilter = ({ setSelectArticle}) => {
	return (
		<select
			onChange={(e) => {
				setSelectArticle(e.target.value);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value={setSelectArticle} className="text-sm sm:text-md">
				All Articles
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ArticlesFilter;
