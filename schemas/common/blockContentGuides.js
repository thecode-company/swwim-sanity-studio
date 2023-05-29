import blockContent from './blockContent'

export default {
  title: 'Block Content',
  name: 'blockContentGuides',
  type: 'array',
  of: [
    ...blockContent.of,
    { type: 'singleImage' },
    { type: 'doubleImage' },
    { type: 'quote' }
  ],
}
