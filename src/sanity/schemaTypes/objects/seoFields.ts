import { defineType } from "sanity";

export default defineType({
	name: "seoFields",
	title: "SEO Fields",
	type: "object",
	description:
		"SEO (Search engine optimization) fields vil hjelpe deg med å optimalisere nettsiden for søkemotorer. Fyll ut disse feltene for å forbedre synligheten til nettsiden din.",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			description:
				"Denne tittelen vil vises i søkeresultatene. Den bør være mellom 50 og 60 tegn lang.",
			validation: (Rule) =>
				Rule.required()
					.min(50)
					.max(60)
					.warning("Title bør være mellom 50 og 60 tegn lang."),
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			description:
				"Denne beskrivelsen vil vises i søkeresultatene. Den bør være mellom 150 og 160 tegn lang.",
			validation: (Rule) =>
				Rule.required()
					.min(150)
					.max(160)
					.warning("Description bør være mellom 150 og 160 tegn lang."),
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			description:
				"Denne bildet vil vises i søkeresultatene når nettsiden din deles på sosiale medier.",
			validation: (Rule) => Rule.required(),
		},
	],
});
