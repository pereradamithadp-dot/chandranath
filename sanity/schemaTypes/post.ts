import { defineField, defineType } from "sanity";

export const POST_CATEGORIES = ["News", "Tax updates", "Events"] as const;

export const post = defineType({
  name: "post",
  title: "News & Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: { list: [...POST_CATEGORIES], layout: "radio" },
      initialValue: "News",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Date",
      description: "Publish date, or the event date for events.",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(240),
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      description: "Featured posts appear first on the News page and home page.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    { title: "Date, newest", name: "dateDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
