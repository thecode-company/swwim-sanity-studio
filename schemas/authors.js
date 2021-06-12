export default {
  title: "Authors",
  name: 'author',
  type: "document",
  fields: [
    {
      title: "First Name",
      description: "The first name of this author",
      name: "firstName",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Last Name",
      description: "The last name of this author",
      name: "lastName",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      description: 'An avatar of the person',
      name: 'image',
      type: 'image',
    }
  ]
}