export default {
  title: 'Services Page',
  name: 'servicesPage',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'H1 Heading',
      name: 'heading',
      description: 'The main heading (H1) for the Services page',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'CTA Banner Content Line 1',
      name: 'contentLine1',
      description: 'First line of content text',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'CTA Banner Content Line 2',
      name: 'contentLine2',
      description: 'Second line of content text',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'CTA Banner Content Line 3',
      name: 'contentLine3',
      description: 'Third line of content text',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'CTA Banner Content Line 4',
      name: 'contentLine4',
      description: 'Fourth line of content text',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'CTA Button',
      name: 'ctaButton',
      type: 'object',
      fields: [
        {
          title: 'Button Text',
          name: 'text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          title: 'Button URL',
          name: 'url',
          type: 'string',
          description: 'Where the button should link to (e.g., /about or https://example.com)',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
} 