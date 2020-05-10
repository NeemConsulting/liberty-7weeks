import {MdSettings} from 'react-icons/md'

export default {
  name: 'brandInfo',
  type: 'document',
  icon: MdSettings,
  title: 'Brand Information',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Brand',
      description: 'Enter your Brand name',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'Introduction to your business, and aims to tell an audience about your products or services.',
      validation: Rule => Rule.required()
    },
    {
      title: 'Facebook Channel',
      name: 'facebookurl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Pinterest Channel',
      name: 'pinteresturl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Instagram Channel',
      name: 'instaurl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'YouTube Channel',
      name: 'youtubeurl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Twitter Channel',
      name: 'twitterurl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Domain Name (Local)',
      name: 'domainurl',
      type: 'url',
      description: `Enter the website Url`,
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Brand Image',
      name: 'brandImageURL',
      type: 'url',
      description: 'The URL of the website associated with the logo',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Logo',
      name: 'brandLogoURL',
      type: 'url',
      description: 'URL of a logo that is representative of the organization',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Language',
      name: 'langhref',
      type: 'string',
      description: 'Please advise language-country like EN-GB',
      validation: Rule => Rule.required()
    }
  ]
}
