import {MdVideocam} from 'react-icons/md'

export default {
  name: 'videoBlock',
  type: 'document',
  icon: MdVideocam,
  title: 'Video Block',
  fields: [
    {
      name: 'videoBlockName',
      type: 'string',
      title: 'Video Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the video block for page layout'
    },
    {
      name: 'videoBlockType',
      title: 'Video Block Type',
      type: 'reference',
      to: {
        type: 'videoBlockType'
      },
      description: 'Select Video Block Type'
    },
    {
      name: 'videoBlock',
      type: 'youTube',
      title: 'Video Block',
      description: 'Add in your youTube video'
    },
    {
      name: 'textBlockBody',
      type: 'textBlockPortableText',
      title: 'Enhance your video with text',
      description: 'Add description or context for the video block'
    }
  ],

  preview: {
    select: {
      title: 'videoBlockName',
      subtitle: 'videoBlockType.videoBlockName',
      media: 'MdVideocam'
    }
  }
}
