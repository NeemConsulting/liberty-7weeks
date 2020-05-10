import {MdEmail} from 'react-icons/md'

export default {
  name: 'newsletterBlock',
  type: 'document',
  icon: MdEmail,
  title: 'Newsletter Block',
  fields: [
    {
      name: 'newsletterBlockName',
      type: 'string',
      title: 'Newsletter Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the newsletter block for page layout'
    },
    {
      name: 'newsletterBlockType',
      title: 'Newsletter Block Type',
      type: 'reference',
      to: {
        type: 'newsletterBlockType'
      },
      description: 'Select Newsletter Block Type'
    },
    {
      name: 'newsletterBlockHeadline',
      type: 'string',
      title: 'Headline',
      description: 'Add catchy CTA headline'
    },
    {
      name: 'newsletterBlockBody',
      type: 'textBlockPortableText',
      title: 'Newsletter Body',
      description: 'Short and Sharp Description'
    },
    {
      name: 'newsletterCampaignID',
      type: 'string',
      title: 'Newsletter Campaign ID',
      description: 'Get the campaign id from the 121 Campaign squad'
    },
    {
      name: 'newsletterBlockCTALabel',
      type: 'string',
      title: 'CTA Label',
      description: 'Optional: Add catchy CTA Label for buttons'
    },
    {
      name: 'newsletterImage',
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
      title: 'newsletterBlockName',
      subtitle: 'newsletterBlockType.newsletterBlockName'
    }
  }
}
