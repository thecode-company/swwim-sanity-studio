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
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}],
      description: 'The content for this service which will appear in the expanded accordion',
      validation: Rule => Rule.required()
    }
  ]
}