const path = require('path');
const { getPagePath } = require('../utils');
const component = path.resolve(
  process.cwd(),
  `../gatsby-theme-portal/src/templates/GalleryArticle/index.tsx`
);

module.exports = async ({ graphql, createPage }) => {
  const result = await graphql(`
    {
      articles: allSanityGalleryArticle {
        nodes {
          headline
          slug {
            current
          }
          parentPage {
            slug {
              current
            }
          }
          tags {
            name
          }
          id
        }
      }
    }
  `);
  const articles = result.data.articles.nodes;

  articles
    .filter(node => node.slug)
    .forEach(node => {
      createPage({
        path: getPagePath(node),
        component,
        context: {
          title: node.headline,
          slug: node.slug.current,
          tags: node.tags.map(tag => tag.name),
          id: node.id,
        },
      });
    });
};
