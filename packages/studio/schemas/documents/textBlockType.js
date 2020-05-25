import {MdTextFields} from 'react-icons/md'

export default {
  name: 'textBlockType',
  type: 'document',
  icon: MdTextFields,
  title: 'Text Block Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Text Block Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Text Block Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'MdTextFields'
    }
  }
}
