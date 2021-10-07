export default {
  title: 'About Page',
  name: 'about',
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
      title: "Hero Image Carousel",
      description: 'The gallery of images for the hero carousel (requires min. 5)',
      name: 'heroImageCarousell',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'image',
        name: 'image',
        fields: [
          {
            title: "(Optional) Video",
            name: 'video',
            type: 'string',
          }
        ],
      }],
      validation: Rule => Rule.min(5)
    },
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'text',
      description: "The block of introductory text that appears below the carousel.",
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: "Swwim Values",
      description: "The grid of values (eg: 'Stay True') which appear below the intro text.",
      type: 'array',
      name: 'values',
      of: [{ type: 'value' }]
    },
    {
      title: "In Page Image",
      name: "inPageImage",
      description: "The image above the instagram section.",
      type: 'image',
    },
    {
      title: "Instagram Images",
      description: 'The 4 images that appear in the instagram section towards the bottom of the page.',
      name: 'instagramImages',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'image',
        fields: [
          {
            name: 'instagramImageUrl',
            type: 'url',
            title: 'Instagram Link URL',
            options: {
              isHighlighted: true
            }
          },
        ],
      }],
      validation: Rule => Rule.required().min(4).max(4)
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