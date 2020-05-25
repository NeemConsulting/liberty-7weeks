const path = require('path');
const component = path.resolve(
  process.cwd(),
  `../gatsby-theme-portal/src/templates/FeatureArticle/index.tsx`
);

module.exports = async ({ graphql, createPage }) => {
  const result = await graphql(`
    {
      items: allSanityFeatureArticle {
        nodes {
          headline
          slug {
            current
          }
          tags {
            tagName
          }
          id
        }
      }
    }
  `);
  const items = result.data.items.nodes;

  items
    .filter(node => node.slug)
    .forEach(node => {
      createPage({
        path: node.slug.current,
        component,
        context: {
          title: node.headline,
          slug: node.slug.current,
          tags: node.tags.map(tag => tag.tagName),
          id: node.id,
        },
      });
    });
};
