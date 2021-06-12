import blockContent from './blockContent'

export default {
  title: 'Block Content',
  name: 'blockContentExtended',
  type: 'array',
  of: [
    ...blockContent.of,
    { type: 'statBlock' },
    { type: 'quote' },
    { type: 'imageCarousel' }
  ],
}
