import { defineType } from "sanity";

const pageSections = [
	{
		name: "Frontpage Hero Section",
		type: "frontpageHeroSection",
	},
];

export default defineType({
	title: "Page sections",
	name: "pageSections",
	type: "array",
	of: [...pageSections],
	options: {
		layout: "list",
		insertMenu: {
			views: [
				{
					name: "grid",
				},
			],
		},
	},
});
