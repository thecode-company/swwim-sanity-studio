export default {
  title: "Signup Forms",
  name: 'signupForm',
  type: "document",
  fields: [
    {
      title: "Form Name",
      description: "Internal name to identify this form",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Mailchimp Embed Code",
      description: "Paste the full Mailchimp form embed code here",
      name: "embedCode",
      type: "text",
      rows: 10,
      validation: Rule => Rule.required()
    },
    {
        title: "Page Type",
        description: "Select which type of pages this form should appear on",
        name: "pageType",
        disableNew: true,
        type: "string",
        validation: Rule => Rule.required(),
        options: {
          list: [
            { title: "Individual Page(s)", value: "single" },
            { title: "All Case Studies", value: "all-case-studies" },
            { title: "All Events", value: "all-events" },
            { title: "All Guides", value: "all-guides" },
            { title: "All Legal Pages", value: "all-legal" },
            { title: "All News Articles", value: "all-news" }
          ]
        }
      },
      {
        title: "Specific Pages",
        description: "If 'Individual Page(s)' is selected above, choose which pages this form should appear on",
        name: "specificPage",
        disableNew: true,
        type: "array",
        of: [{
          type: "reference",
          disableNew: true,
          to: [
            { type: "home" },
            { type: "about" },
            { type: "news" },
            { type: "caseStudy" },
            { type: "events" },
            { type: "guides" },
            { type: "contact" },
            { type: "service" },
            { type: "legal" }
          ]
        }],
        hidden: ({ document }) => document?.pageType !== "single",
        validation: Rule => Rule.custom((specificPages, context) => {
          if (context.document?.pageType === "single" && (!specificPages || specificPages.length === 0)) {
            return "Please select at least one specific page when 'Single Page' is chosen"
          }
          return true
        })
      }
    ],
    validation: Rule => Rule.custom((fields) => {
      if (fields?.pageType === "single" && !fields?.specificPage) {
        return "Please select a specific page when 'Single Page' is chosen"
      }
      return true
    })
}