import { defineType } from "sanity";

export default defineType({
	name: "frontpageHeroSection",
	title: "Frontpage Hero Section",
	type: "object",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "text",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "title",
			media: "image",
		},
		prepare(selection) {
			return {
				title: selection.title,
				subtitle: "Frontpage Hero Section",
				media: selection.media,
			};
		},
	},
});
