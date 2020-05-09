export default {
  name: 'navLink',
  type: 'object',
  title: 'Nav Link',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Navigation Link Name'
    },
    {
      name: 'landingPage',
      title: 'Landing Page',
      description: 'Select Landing Page',
      type: 'reference',
      to: {
        type: 'landingLayout'
      }
    },
    {
      name: 'path',
      title: 'Path',
      description: 'Example: /about-us',
      type: 'string'
    },
    {
      name: 'externalLink',
      title: 'External Link',
      description: 'Example: https:www.unilever.com/privacy',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
