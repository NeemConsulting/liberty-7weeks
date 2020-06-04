import {FaGlobe} from 'react-icons/fa'

export default {
  name: 'globalLabels',
  title: 'Global Labels',
  icon: FaGlobe,
  type: 'document',
  fields: [
    {
      name: 'top',
      type: 'string',
      title: 'Back To Top',
      description: 'Label for Back To Top'
    },
    {
      name: 'play',
      title: 'Play',
      type: 'string',
      description: 'Label for Play (accessibility name for symbol'
    },
    {
      name: 'next',
      title: 'Next',
      type: 'string',
      description: 'Label for Next (accessibility name for symbol'
    },
    {
      name: 'previous',
      title: 'Previous',
      type: 'string',
      description: 'Label for Previous (accessibility name for symbol'
    }
  ]
}
