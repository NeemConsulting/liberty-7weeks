import {MdTextFields} from 'react-icons/md'

export default {
  name: 'taxonomyBlockType',
  type: 'document',
  icon: MdTextFields,
  title: 'Taxonomy Block Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Taxonomy Block Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Taxonomy Block Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'MdTextFields'
    }
  }
}
