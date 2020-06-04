import {MdTextFields} from 'react-icons/md'

export default {
  name: 'taxonomyBlock',
  type: 'document',
  icon: MdTextFields,
  title: 'Taxonomy Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Taxonomy Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the text for page layout'
    },
    {
      name: 'taxonomyBlockType',
      title: 'Taxonomy Block Type',
      type: 'reference',
      to: {
        type: 'taxonomyBlockType'
      },
      description: 'Select Taxonomy Block Type'
    },
    {
      name: 'taxonomyTags',
      title: 'Taxonomy Tags',
      description: 'Add list of categories and tags that will be searched',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}, {type: 'tagCategory'}]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'taxonomyTags',
      media: 'MdTextFields'
    }
  }
}
