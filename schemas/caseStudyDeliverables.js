export default {
  title: "Case Study Deliverables",
  name: 'caseStudyDeliverable',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this deliverable, eg: 'Content Creation'",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
  ]
}