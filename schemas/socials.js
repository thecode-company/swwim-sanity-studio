export default {
  title: "Social",
  name: 'social',
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      description: 'eg: "Instagram"',
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "URL",
      name: "url",
      description: 'eg: "https://www.instagram.com/weswwim"',
      type: "url",
      validation: Rule => Rule.required()
    },
  ]
}