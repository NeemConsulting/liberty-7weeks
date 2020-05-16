import {MdImage} from 'react-icons/md'

export default {
  name: 'imageBlock',
  type: 'document',
  icon: MdImage,
  title: 'Image Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Image Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the image block for page layout'
    },
    {
      name: 'imageBlockType',
      title: 'Image Block Type',
      type: 'reference',
      to: {
        type: 'imageBlockType'
      },
      description: 'Select Image Block Type'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image Block',
      description: 'Typically, this may be a landscape image so dont foget about the focal point'
    },
    {
      name: 'textBlockBody',
      type: 'textBlockPortableText',
      title: 'Enhance your image with text',
      description: 'Add some rich text or quote'
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Provide a link (if required)'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'imageBlockType.name',
      media: 'image'
    }
  }
}
