export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Brand *',
      type: 'reference',
      to: {
        type: 'brand'
      },
      description: 'Select Brand'
    },
    {
      title: 'Product Name *',
      name: 'productName',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Product Tag Line',
      name: 'productTagLine',
      type: 'string',
      description: 'Catchy Tag Line'
    },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'figure',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Marketing Description',
      name: 'marketingDescription',
      description: 'Marketing sales pitch like - Is it right for me?',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Usage Details',
      name: 'usageDetails',
      description: 'Brief description of Top Tips and How To Use',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}]
        }
      ],
      description: 'Select tags to meet customer needs - Best For'
    },
    {
      title: 'Smart Product ID',
      name: 'smartProductID',
      type: 'string',
      description: 'Add smartProductID for BIN Solution (if Available)'
    },
    {
      title: 'Buy Now',
      name: 'buyNow',
      type: 'url',
      description: 'Direct product link to e-commerce site'
    },
    {
      title: 'Learn More',
      name: 'learnMore',
      type: 'url',
      description: 'Direct product link to brand site'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'productName'
      }
    }
  ],
  preview: {
    select: {
      title: 'productName',
      subtitle: 'productTagLine',
      media: 'productImage'
    }
  }
}
