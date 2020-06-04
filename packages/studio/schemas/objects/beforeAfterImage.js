import { IoIosImages } from "react-icons/io";
IoIosImages
export default {
  name: 'beforeAfterImage',
  type: 'object',
  title: 'Before and After images',
  icon: IoIosImages,
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'beforeImage',
      title: 'Insert Before Image',
      type: 'image',
      validation: Rule => Rule.required(),
      },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
    name: 'afterImage',
    title: 'Insert After Image',
    type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'alts',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  
  preview: {
    select: {
      imageUrl: 'asset.url'
    }
  }
}
