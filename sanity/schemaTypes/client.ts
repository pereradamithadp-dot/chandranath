import { defineField, defineType } from "sanity";

export const client = defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "logo",
      description: "Optional. Clients without a logo are shown by name only.",
      type: "image",
    }),
    defineField({
      name: "showOnHome",
      title: "Show on home page",
      description: "The first six ticked clients (by order) appear on the home page.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      description: "Lower numbers appear first.",
      type: "number",
      initialValue: 100,
    }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", media: "logo" } },
});
