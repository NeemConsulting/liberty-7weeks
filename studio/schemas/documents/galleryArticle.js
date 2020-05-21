import {FaNewspaper} from 'react-icons/fa'

export default {
  name: 'galleryArticle',
  title: 'Gallery Article',
  icon: FaNewspaper,
  type: 'document',
  fields: [
    {
      name: 'headline',
      type: 'string',
      title: 'Headline *',
      validation: Rule => Rule.required(),
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string'
    },
    {
      name: 'heroImage',
      type: 'figure',
      title: 'Hero Image'
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'imageGallery',
      options: {
        collapsible: true
      }
    },
    {
      name: 'body',
      type: 'articlePortableText',
      title: 'Gallery Body',
      description: 'Insert Images, Video and Products anywhere in the body'
    },
    {
      name: 'parentPage',
      title: 'Parent Page',
      description: 'Article will be categorised under the parent landing page',
      type: 'reference',
      to: {
        type: 'landingPage'
      }
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description:
        'First tag is used for page breadcrumb, with supporting tags to generate related articles',
      of: [
        {
          type: 'reference',
          to: {
            type: 'tag'
          }
        }
      ]
    },
    {
      name: 'readnext',
      title: 'Read Next',
      type: 'reference',
      description: 'Editorial recommendation for next article to read',
      to: [{type: 'howToArticle'}, {type: 'featureArticle'}, {type: 'galleryArticle'}]
    },

    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {
        type: 'author'
      }
    },

    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'Date displayed on page'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'May be used for friendly url',
      options: {
        source: 'headline',
        maxLength: 96
      }
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subheading',
      media: 'heroImage'
    }
  }
}
