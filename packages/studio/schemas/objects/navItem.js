export default {
  title: 'Navigation Item',
  name: 'navItem',
  type: 'object',
  fields: [
    {
      name: 'navL1',
      type: 'navLink',
      title: 'Primary Navigation'
    },

    {
      name: 'navL2',
      title: 'Secondary Navigation',
      type: 'array',
      of: [
        {
          type: 'navLink'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'navL1.name'
    }
  }
}
