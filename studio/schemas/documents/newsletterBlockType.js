import {MdEmail} from 'react-icons/md'

export default {
  name: 'newsletterBlockType',
  type: 'document',
  icon: MdEmail,
  title: 'Newsletter Block Type',
  fields: [
    {
      name: 'newsletterBlockName',
      type: 'string',
      title: 'Newsletter Block Type'
    },
    {
      name: 'newsletterBlockDescription',
      type: 'string',
      title: 'Newsletter Block Description'
    }
  ],
  preview: {
    select: {
      title: 'newsletterBlockName',
      subtitle: 'newsletterBlockDescription'
    }
  }
}
