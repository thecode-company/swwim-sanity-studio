export default {
  title: "Legal",
  name: 'legal',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this legal section, eg: 'Privacy'",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
}