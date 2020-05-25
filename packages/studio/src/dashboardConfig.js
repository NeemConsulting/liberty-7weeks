export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9ca69cb6c58b2c6955d569',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-j541bj7v',
                  apiId: '1aff24ab-1562-4aa0-bb0b-c05c123d43b0'
                },
                {
                  buildHookId: '5e9ca69d8e1a5624a681f8b8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3d35kyw2',
                  apiId: '1ce17cdb-56a3-4d9c-9862-a648edd78856'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommyyau/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-3d35kyw2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {
        title: 'Recent Articles',
        order: '_createdAt desc',
        types: ['howToArticle', 'featureArticle', 'galleryArticle']
      },
      layout: {width: 'medium'}
    }
  ]
}
