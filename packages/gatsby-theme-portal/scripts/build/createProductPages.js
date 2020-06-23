const path = require('path');
const { getPagePath } = require('../utils');
const component = path.resolve(
  process.cwd(),
  `../gatsby-theme-portal/src/templates/Product/index.tsx`
);

module.exports = async ({ graphql, createPage }) => {
  const result = await graphql(`
    {
      items: allSanityProduct {
        nodes {
          id
          name
          slug {
            current
          }
          tags {
            name
          }
        }
      }
    }
  `);
  const items = result.data.items.nodes;

  items.forEach(node => {
    createPage({
      path: getPagePath(node),
      component,
      context: {
        title: node.name,
        slug: node.id,
        tags: node.tags.map(tag => tag.name),
      },
    });
  });
};
