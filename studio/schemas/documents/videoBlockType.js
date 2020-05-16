import {MdVideocam} from 'react-icons/md'

export default {
  name: 'videoBlockType',
  type: 'document',
  icon: MdVideocam,
  title: 'Video Block Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Video Block Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Video Block Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'MdVideocam'
    }
  }
}
