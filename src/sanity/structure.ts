import { BookIcon, HomeIcon } from "@sanity/icons";
import type { ListItemBuilder, StructureResolver } from "sanity/structure";

const hiddenDocTypes = (listItem: ListItemBuilder) =>
	!["frontpage"].includes(listItem.getId() as string);

export const structure: StructureResolver = (S) =>
	S.list()
		.title("Base")
		.items([
			S.listItem()
				.title("Content")
				.icon(BookIcon)
				.child(
					S.list()
						.title("Content")
						.items([
							S.listItem()
								.title("Frontpage")
								.icon(HomeIcon)
								.child(
									S.document()
										.title("Frontpage")
										.schemaType("frontpage")
										.documentId("frontpage"),
								),
						]),
				),
			S.listItem()
				.title("Rest")
				.child(
					S.list()
						.title("Rest")
						.items([...S.documentTypeListItems().filter(hiddenDocTypes)]),
				),
		]);
