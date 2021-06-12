export default {
  title: "News Categories",
  name: 'newsCategory',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this category",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
}