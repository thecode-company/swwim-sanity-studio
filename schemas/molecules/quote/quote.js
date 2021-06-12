export default {
  title: 'Quote',
  type: 'object',
  name: 'quote',
  fields: [
    {
      name: 'quote',
      type: 'text',
      rows: 2,
      title: 'Quote',
    },
    {
      name: 'personJobTitle',
      type: 'string',
      title: 'Person / Job Title',
      description: 'John Smith, General Manager, ACME Elits'
    }
  ],
  preview: {
    select: {
      personJobTitle: 'personJobTitle',
    },
    prepare(selection) {
      return {
        title: `Quote: ${selection.personJobTitle}`
      }
    }
  }
}
