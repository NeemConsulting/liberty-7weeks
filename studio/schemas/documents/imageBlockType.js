import {MdImage} from 'react-icons/md'

export default {
  name: 'imageBlockType',
  type: 'document',
  icon: MdImage,
  title: 'Image Block Type',
  fields: [
    {
      name: 'imageBlockName',
      type: 'string',
      title: 'Image Block Type'
    },
    {
      name: 'imageBlockDescription',
      type: 'string',
      title: 'Image Block Description'
    }
  ],
  preview: {
    select: {
      title: 'imageBlockName',
      subtitle: 'imageBlockDescription',
      media: 'MdImage'
    }
  }
}
