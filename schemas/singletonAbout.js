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
      title: 'H1 Heading - Line 1',
      name: 'headingLine1',
      description: 'The first line of the H1 heading for the About page',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'H1 Heading - Line 2',
      name: 'headingLine2',
      description: 'The second line of the H1 heading for the About page',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'H1 Heading - Line 3',
      name: 'headingLine3',
      description: 'The third line of the H1 heading for the About page',
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
            type: 'file',
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
      title: "Team Section Heading",
      name: "teamSectionHeading",
      type: 'string',
      description: "The heading for the team section.",
      validation: Rule => Rule.required()
    },
    {
      title: "In Page Image",
      name: "inPageImage",
      description: "The image above the instagram section.",
      type: 'image',
    },
    {
      title: "Instagram Section Heading",
      name: "instagramSectionHeading",
      type: 'string',
      description: "The heading for the instagram section.",
      validation: Rule => Rule.required()
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