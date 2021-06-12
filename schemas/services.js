export default {
  title: "Services",
  name: 'service',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this service, eg: 'Content Strategy'",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Icon",
      description: 'The icon that supports this service',
      name: 'icon',
      type: 'image',
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