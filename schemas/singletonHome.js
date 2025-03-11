export default {
  title: 'Home Page',
  name: 'home',
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
      title: 'Hero Image',
      name: 'heroImage',
      description: "The image weaved into the bottom left section of the hero area. Aspect ratio should be 2.75:1.",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Supporting Image',
      name: 'heroSupportingImage',
      description: "The image weaved into the top right section of the hero area. Aspect ratio should be 2:1.",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: '"Welcome" Section Heading',
      name: 'welcomeHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: '"Welcome" Section Text',
      name: 'welcomeText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: '"Welcome" Section Images',
      description: 'The 3 images that appear in the welcome section grid',
      name: 'welcomeSectionImages',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'image'
      }],
      validation: Rule => Rule.min(1)
    },
    {
      title: "Welcome Section Insta Stories",
      description: 'The gallery of images for the hero carousel (requires min. 1)',
      name: 'welcomeSectionInstaStories',
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
      validation: Rule => Rule.min(1)
    },
    {
      title: '"Just Getting On With It" Section Text',
      name: 'justGettingOnWithItText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: '"Just Getting On With It" Section Image',
      name: 'justGettingOnWithItImage',
      type: 'image'
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