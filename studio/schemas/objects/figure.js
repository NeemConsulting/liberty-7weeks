import {FaImage} from 'react-icons/fa'

export default {
  name: 'figure',
  title: 'Image',
  icon: FaImage,
  type: 'image',
  description: 'Upload image from your computer, TAB, or paste image fom clipboard',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt Text *',
      description: 'For accessibility purposes, please describe the image',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'imageCaption',
      title: 'Caption',
      description: 'Name or description of image',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'imageCredit',
      title: 'Credit',
      description: 'Leave blank if image is from TAB',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'imageTabID',
      title: 'tabID',
      description: 'Leave blank if image is not from TAB',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ]
}
