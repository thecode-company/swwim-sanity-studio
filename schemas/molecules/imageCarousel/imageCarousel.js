export default {
  title: 'Image Carousel',
  type: 'object',
  name: 'imageCarousel',
  fields: [
    {
      title: "Images",
      name: 'images',
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
      title: "(Optional) Caption",
      name: 'caption',
      type: 'string',
    },
    {
      title: "(Optional) Supporting Quote",
      name: 'supportingQuote',
      type: 'string',
      description: "The quote that appears to the right of the image / carousel"
    },
    {
      title: "(Optional) Supporting Quote Author",
      name: 'supportingQuoteAuthor',
      type: 'string',
      description: "The Author of the quote that appears to the right, eg: 'Laura Farrand, Head of PR, Givenchy Parfums'"
    },
  ],
  preview: {
    select: {
      image: 'images',
    },
    prepare(selection) {
      return {
        title: `Image Carousel`
      }
    }
  }
}