const path = require('path');
const { getSlug } = require('../utils');
const component = path.resolve(
  process.cwd(),
  `../gatsby-theme-portal/src/templates/LandingPage/index.tsx`
);

module.exports = async ({ graphql, createPage }) => {
  const result = await graphql(`
    {
      allSanityLandingPage {
        nodes {
          id
          name
        }
      }
    }
  `);

  result.data.allSanityLandingPage.nodes.forEach(node => {
    createPage({
      path: getSlug(node.name || node.id),
      component,
      context: {
        title: node.name,
        slug: getSlug(node.name || node.id),
        id: node.id,
      },
    });
  });
};
