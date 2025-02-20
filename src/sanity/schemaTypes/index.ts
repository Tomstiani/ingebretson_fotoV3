import type { SchemaTypeDefinition } from "sanity";
import frontpage from "./documents/frontpage";
import seoFields from "./objects/fields/seoFields";
import pageSections from "./objects/pageSections";
import frontpageHeroSection from "./objects/pageSections/heros/frontpageHeroSection";

const documents = [frontpage];
const objects = [frontpageHeroSection, pageSections, seoFields];

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [...objects, ...documents],
};
