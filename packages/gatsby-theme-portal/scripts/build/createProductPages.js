const path = require('path');
const { getSlug } = require('../utils');
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
          productName
          slug {
            current
          }
        }
      }
    }
  `);
  const items = result.data.items.nodes;

  items.forEach(node => {
    createPage({
      path: node.slug ? node.slug.current : getSlug(node.productName),
      component,
      context: {
        title: node.productName,
        slug: node.id,
      },
    });
  });
};
