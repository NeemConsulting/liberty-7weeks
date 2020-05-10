import {FaSitemap} from 'react-icons/fa'

export default {
  name: 'navigation',
  type: 'document',
  icon: FaSitemap,
  title: 'Navigation',
  fields: [
    {
      name: 'navigationStructure',
      type: 'navigationPortableText',
      title: 'Navigation Structure',
      description: 'Build using bullet points & sub-bullet points to create navigation and links'
    }
  ]
}
