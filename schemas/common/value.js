export default {
  title: "Value",
  name: 'value',
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      description: "The heading of this value, eg: 'Stay True'",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Text",
      name: "text",
      description: "The short text description of this value",
      type: "text",
      rows: 3,
      validation: Rule => Rule.required()
    }
  ]
}