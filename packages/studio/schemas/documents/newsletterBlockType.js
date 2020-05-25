import {MdEmail} from 'react-icons/md'

export default {
  name: 'newsletterBlockType',
  type: 'document',
  icon: MdEmail,
  title: 'Newsletter Block Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Newsletter Block Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Newsletter Block Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
}
