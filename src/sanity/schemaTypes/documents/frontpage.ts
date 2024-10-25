import { defineField, defineType, isDev } from "sanity";

export default defineType({
	name: "frontpage",
	title: "Frontpage",
	type: "document",
	icon: () => "🏠",
	groups: [
		{
			title: "Content",
			name: "content",
		},
		{
			title: "SEO",
			name: "seo",
		},
		{
			title: "Settings",
			name: "settings",
		},
	],
	fields: [
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			readOnly: !isDev,
			group: ["settings"],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "sections",
			title: "Sections",
			type: "pageSections",
			group: ["content"],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "seo",
			title: "SEO",
			type: "seoFields",
			group: ["seo"],
			validation: (Rule) => Rule.required(),
		}),
	],
});
