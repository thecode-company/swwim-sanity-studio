export default {
  title: "Clients",
  name: 'client',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The clients name",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      description: 'The clients logo',
      validation: Rule => Rule.required()
    },
    {
      title: 'External Website',
      name: 'externalWebsite',
      type: 'string',
    },
    {
      title: 'Internal Case Study',
      name: 'internalCaseStudy',
      type: 'reference',
      to: [
        {type: 'caseStudy'},
      ]
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }
  ]
}