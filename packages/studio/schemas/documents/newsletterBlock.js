import {MdEmail} from 'react-icons/md'

export default {
  name: 'newsletterBlock',
  type: 'document',
  icon: MdEmail,
  title: 'Newsletter Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Newsletter Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the newsletter block for page layout'
    },
    {
      name: 'type',
      title: 'Newsletter Block Type',
      type: 'reference',
      to: {
        type: 'newsletterBlockType'
      },
      description: 'Select Newsletter Block Type'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'Add catchy CTA headline'
    },
    {
      name: 'body',
      type: 'textBlockPortableText',
      title: 'Newsletter Body',
      description: 'Short and Sharp Description'
    },
    {
      name: 'campaignID',
      type: 'string',
      title: 'Newsletter Campaign ID',
      description: 'Get the campaign id from the 121 Campaign squad'
    },
    {
      name: 'ctaLabel',
      type: 'string',
      title: 'CTA Label',
      description: 'Optional: Add catchy CTA Label for buttons'
    },
    {
      name: 'image',
      type: 'figure',
      options: {
        collapsible: true
      },
      title: 'Newsletter Image',
      description: 'Optional: Image may be added if required'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type.name'
    }
  }
}
