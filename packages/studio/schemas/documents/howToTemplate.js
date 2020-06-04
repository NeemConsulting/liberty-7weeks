import {FaNewspaper} from 'react-icons/fa'

export default {
  name: 'howToTemplate',
  title: 'How To Template',
  icon: FaNewspaper,
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name *',
      description: 'Label for Template',
      validation: Rule => Rule.required()
    },
    {
      name: 'toolName',
      title: 'Tools',
      type: 'string',
      description: 'Label for Tools'
    },
    {
      name: 'productName',
      title: 'Products',
      type: 'string',
      description: 'Label for Products'
    },
    {
      name: 'nextRead',
      title: 'Next Read',
      type: 'string',
      description: 'Label for Next Read'
    },
    {
      name: 'relatedTopicsName',
      title: 'Related Topics',
      type: 'string',
      description: 'Label for Related Topics'
    },
    {
      name: 'relatedArticlesName',
      title: 'Related Articles',
      type: 'string',
      description: 'Label for Related Articles'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'FaNewspaper'
    }
  }
}
