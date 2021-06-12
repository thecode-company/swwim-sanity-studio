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
      title: "Caption",
      name: 'caption',
      type: 'string',
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