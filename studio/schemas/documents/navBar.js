import {FaSitemap} from 'react-icons/fa'

export default {
  name: 'navBar',
  title: 'Navigation Bar',
  icon: FaSitemap,
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Navigation Identifier e.g. Header'
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      description: 'Add navigatable pages',
      type: 'array',
      of: [
        {
          type: 'navItem'
        }
      ]
    }
  ]
}
