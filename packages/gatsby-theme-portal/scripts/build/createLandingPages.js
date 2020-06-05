const path = require('path');
const { getPagePath } = require('../utils');
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
          slug {
            current
          }
        }
      }
    }
  `);

  result.data.allSanityLandingPage.nodes.forEach(node => {
    createPage({
      path: getPagePath(node),
      component,
      context: {
        title: node.name,
        slug: node.slug.current,
        id: node.id,
      },
    });
  });
};
