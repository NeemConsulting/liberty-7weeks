export default {
  name: 'blogAuthorReference',
  type: 'object',
  title: 'Author reference',
  fields: [
    {
      name: 'blogAuthor',
      type: 'reference',
      to: [
        {
          type: 'blogAuthor'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'blogAuthor.name',
      media: 'blogAuthor.image.asset'
    }
  }
}
