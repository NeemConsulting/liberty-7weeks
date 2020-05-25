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
      title: 'Navigation Identifier',
      description: 'e.g. Header or Footer'
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      description: 'Add Level 1 and Level 2 navigation',
      type: 'array',
      of: [
        {
          type: 'navItem'
        }
      ]
    }
  ]
}
