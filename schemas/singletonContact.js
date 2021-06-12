export default {
  title: 'Contact Details',
  name: 'contact',
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
      title: 'Email Address',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'text',
      rows: 3
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      description: 'The array of Swwims social channels',
      type: 'array',
      of: [{type: 'social', title: 'Social'}],
    },
  ]
}