export default {
  title: 'Stat',
  type: 'object',
  name: 'stat',
  fields: [
    {
      name: 'heading',
      description: "The heading of this stat, eg: '100'",
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subText',
      description: "The sub text of this stat, eg: 'impressions since launch'",
      type: 'string',
      title: 'Sub Text',
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      subText: 'subText'
    },
    prepare(selection) {
      return {
        title: [selection.heading, selection.subText].join(' ')
      }
    }
  }
}
