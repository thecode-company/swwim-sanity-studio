export default {
  title: 'Popups',
  name: 'popups',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    // {
    //   title: 'Title',
    //   name: 'title',
    //   type: 'string',
    //   validation: Rule => Rule.required()
    // },
    {
      title: 'Popup Enabled',
      description: 'Toggle this option on if you want to enable the popup modal',
      name: 'popupEnabled',
      type: 'boolean',
    },
    {
      title: 'Popup Banner Text',
      description: 'The text for the banner running across the top of the site, eg "Sign up for all things Swwim!"',
      name: 'popupBannerText',
      type: 'string'
    },
    {
      title: 'Popup Heading',
      name: 'popupTitle',
      type: 'string'
    },
    {
      title: 'Popup Text',
      name: 'popupText',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Popup Image',
      name: 'popupImage',
      type: "image",
    },
    {
      title: 'Popup Newsletter',
      description: 'Toggle this option on if you want the popup to be a newsletter signup (only choose one of these options)',
      name: 'popupNewsletter',
      type: 'boolean',
    },
    {
      title: 'Popup Article / Workshop / Guide link',
      description: 'Toggle this option on if you want the popup to be a link to an article / workshop / guide (only choose one of these options)',
      name: 'popupArticle',
      type: 'boolean',
    },
    {
      title: 'Article / Workshop / Guide link',
      description: 'The article to link to IF "Popup Article" is toggled on above.',
      name: 'popupArticleLink',
      type: 'reference',
      to: [
        {type: 'guides'},
        {type: 'events'},
        {type: 'news'},
      ]
    },
  ]
}