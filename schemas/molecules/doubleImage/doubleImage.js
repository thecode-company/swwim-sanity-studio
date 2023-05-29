export default {
  title: 'Double Image',
  type: 'object',
  name: 'doubleImage',
  fields: [
    {
      name: 'image1',
      type: 'image',
      title: 'Image 1',
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Image 2',
    }
  ],
  preview: {
    select: {
      image: 'image1',
    },
    prepare(selection) {
      return {
        title: `Double Image`,
        media: selection.image
      }
    }
  }
}
