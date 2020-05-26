const path = require('path');
const component = path.resolve(
  process.cwd(),
  `../gatsby-theme-portal/src/templates/HowtoArticle/index.tsx`
);

module.exports = async ({ graphql, createPage }) => {
  const result = await graphql(`
    {
      articles: allSanityHowToArticle {
        nodes {
          headline
          slug {
            current
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
        path: node.slug.current,
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
