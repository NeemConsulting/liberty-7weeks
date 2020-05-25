import {MdImage} from 'react-icons/md'

export default {
  name: 'imageBlockType',
  type: 'document',
  icon: MdImage,
  title: 'Image Block Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Image Block Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Image Block Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'MdImage'
    }
  }
}
