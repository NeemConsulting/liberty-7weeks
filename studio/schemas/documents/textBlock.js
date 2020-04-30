export default {
  name: 'textBlock',
  type: 'document',
  title: 'Text Block',
  fields: [
    {
      name: 'textBlockName',
      type: 'string',
      title: 'Text Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the slider for page layout'
    },
    {
      name: 'textBlockBody',
      type: 'textBlockPortableText',
      title: 'Text Block',
      description: 'Add some rich text or quote'
    }
  ],
  preview: {
    select: {
      title: 'textBlockName',
      subtitle: 'textBlockBody'
    }
  }
}
