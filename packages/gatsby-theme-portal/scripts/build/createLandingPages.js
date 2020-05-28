const path = require('path');
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
      path: node.slug.current,
      component,
      context: {
        title: node.name,
        slug: node.slug.current,
        id: node.id,
      },
    });
  });
};
