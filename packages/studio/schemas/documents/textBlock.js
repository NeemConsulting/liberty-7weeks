import {MdTextFields} from 'react-icons/md'

export default {
  name: 'textBlock',
  type: 'document',
  icon: MdTextFields,
  title: 'Text Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Text Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the text for page layout'
    },
    {
      name: 'textBlockType',
      title: 'Text Block Type',
      type: 'reference',
      to: {
        type: 'textBlockType'
      },
      description: 'Select Text Block Type'
    },
    {
      name: 'textBlockBody',
      type: 'textBlockPortableText',
      title: 'Text Block',
      description: 'Add some rich text or quote'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'textBlockBody',
      media: 'MdTextFields'
    }
  }
}
