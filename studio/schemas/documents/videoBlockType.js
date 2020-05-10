import {MdVideocam} from 'react-icons/md'

export default {
  name: 'videoBlockType',
  type: 'document',
  icon: MdVideocam,
  title: 'Video Block Type',
  fields: [
    {
      name: 'videoBlockName',
      type: 'string',
      title: 'Video Block Type'
    },
    {
      name: 'videoBlockDescription',
      type: 'string',
      title: 'Video Block Description'
    }
  ],
  preview: {
    select: {
      title: 'videoBlockName',
      subtitle: 'videoBlockDescription',
      media: 'MdVideocam'
    }
  }
}
