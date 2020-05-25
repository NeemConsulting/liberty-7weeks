const path = require('path');
const { getSlug } = require('../utils');
const component = path.resolve(
  process.cwd(),
  `../gatsby-theme-portal/src/templates/LandingPage/index.tsx`
);

module.exports = async ({ graphql, createPage }) => {
  const result = await graphql(`
    {
      allSanityLandingLayout {
        nodes {
          id
          landingPage
        }
      }
    }
  `);

  result.data.allSanityLandingLayout.nodes.forEach(node => {
    createPage({
      path: getSlug(node.landingPage || node.id),
      component,
      context: {
        title: node.landingPage,
        slug: getSlug(node.langingPage || node.id),
        id: node.id,
      },
    });
  });
};
