export default {
  name: 'productReference',
  type: 'object',
  title: 'Product Placement',
  fields: [
    {
      name: 'product',
      type: 'reference',
      to: [
        {
          type: 'product'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'product.productName',
      media: 'product.figure.asset'
    }
  }
}
