export default {
  title: 'SEO / Share Settings',
  name: 'seo',
  type: 'object',
  options: {
    collapsible: true
  },
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers.',
      validation: Rule =>
        Rule.max(50).warning('Longer titles may be truncated by search engines')
    },
    {
      title: 'Meta Description',
      name: 'metaDesc',
      type: 'text',
      rows: 3,
      description: 'Description for search engines.',
      validation: Rule =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by search engines'
        )
    },
    {
      title: 'Share Graphic',
      name: 'shareGraphic',
      type: 'image',
      description: 'Share graphics will be cropped to 1200x630'
    },
    {
      title: 'Allow Search Engines to Index',
      name: 'allowIndex',
      type: 'boolean',
      description: 'Toggle off to add a noindex meta tag and prevent search engines from indexing this page',
      initialValue: true,
    },
    {
      title: 'Advanced Robots Settings',
      name: 'advancedRobots',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          title: 'Allow Following Links',
          name: 'allowFollow',
          type: 'boolean',
          description: 'Toggle off to add a nofollow directive',
          initialValue: true,
        },
        {
          title: 'Allow Image Indexing',
          name: 'allowImageIndex',
          type: 'boolean',
          description: 'Toggle off to prevent image indexing',
          initialValue: true,
        },
        {
          title: 'Allow Archiving',
          name: 'allowArchive',
          type: 'boolean',
          description: 'Toggle off to prevent search engines from showing cached versions',
          initialValue: true,
        }
      ]
    }
  ]
}