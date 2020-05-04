import {GiSpray} from 'react-icons/gi'

export default {
  name: 'productReference',
  icon: GiSpray,
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
      subtitle: 'product.productTagLine',
      media: 'product.productImage'
    }
  }
}
