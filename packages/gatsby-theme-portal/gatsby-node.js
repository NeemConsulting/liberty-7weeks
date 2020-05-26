/* eslint-disable no-console */
const url = require('url');
const fs = require('fs');
const get = require('lodash/get');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const getPageTemplate = require('./scripts/build/getPageTemplate');
const createLandingPages = require('./scripts/build/createLandingPages');
const createHowtoPages = require('./scripts/build/createHowtoPages');
const createProductPages = require('./scripts/build/createProductPages');
const createFeaturePages = require('./scripts/build/createFeaturePages');
const createGalleryPages = require('./scripts/build/createGalleryPages');

const addTrailingSlash = path => {
  try {
    return path && path.endsWith('/') ? path : `${path}/`;
  } catch (err) {
    console.error(err);
  }
};

const findPageFromNodes = (pagesNodes, pageType) =>
  pagesNodes.find(pageNode => pageNode.type === pageType);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // const createPageFromTemplate = (edge, page) => {
  //   const slug = addTrailingSlash(edge.node.fields.slug);
  //   createPage({
  //     path: slug,
  //     component: path.resolve(process.cwd(), getPageTemplate(page.type)),
  //     context: {
  //       page,
  //       edge,
  //       slug,
  //       name: edge.node.name,
  //       title: get(edge, 'node.title'),
  //       nextSlug: addTrailingSlash(get(edge, 'next.fields.slug')),
  //       previousSlug: addTrailingSlash(get(edge, 'previous.fields.slug')),
  //     },
  //   });
  // };

  const pagesCreators = [
    createLandingPages({
      graphql,
      createPage,
    }),
    createHowtoPages({
      graphql,
      createPage,
    }),
    createFeaturePages({
      graphql,
      createPage,
    }),
    createProductPages({
      graphql,
      createPage,
    }),
    createGalleryPages({
      graphql,
      createPage,
    }),
  ];
  // const pages = await createDefaultPages({
  //   graphql,
  //   createPage: page => {
  //     const slug = addTrailingSlash(page.relativePath);
  //     createPage({
  //       path: slug,
  //       component: require.resolve(getPageTemplate(page.type)),
  //       context: {
  //         title: get(page, 'title'),
  //         brand: get(page, 'brand'),
  //         regexpBrand: get(page, 'brand')
  //           ? '/' + get(page, 'brand') + '/i'
  //           : '',
  //         slug,
  //         page,
  //       },
  //     });
  //   },
  // });

  await Promise.all(pagesCreators);
};

exports.onCreateWebpackConfig = ({
  actions,
  getConfig,
  stage,
  loaders,
  plugins,
}) => {
  /*
  const appConfig = require('awd-app-config').getConfig();

  // Create an object of all the variables in .env file
  const envKeys = Object.keys(appConfig).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(appConfig[next]);
    return prev;
  }, {});
  */
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      optimization: {
        splitChunks: {
          minSize: 8000,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: 1,
            },
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      },
      module: {
        rules: [
          {
            exclude: require.resolve(__dirname, 'node_modules'),
            include: require.resolve(
              __dirname,
              'src/_[A-Za-z]+\\.scss$|[A-Za-z]+\\.css$/'
            ),

            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        ],
      },
    });
  }

  // actions.setWebpackConfig({
  //   plugins: [plugins.define(envKeys)],
  // });

  // disable map-files
  actions.setWebpackConfig({
    devtool: false,
  });

  const config = getConfig();
  config.resolve = {
    ...config.resolve,
    alias: { ...config.resolve.alias, lodash: 'lodash-es' },
  };
  const svgLoaderRule = config.module.rules.find(rule => {
    if (
      rule.test === /\.svg$/ && Array.isArray(rule.use)
        ? rule.use.length === 2
        : false
    ) {
      return rule;
    }
  });
  svgLoaderRule &&
    svgLoaderRule.use &&
    (svgLoaderRule.use[0].options.classIdPrefix = true);

  if (stage === 'develop') {
    config.module.rules.push({
      test: /react-hot-loader/,
      use: [loaders.js()],
    });
  }

  if (stage === 'build-html') {
    config.module.rules.push({
      test: /elasticsearch-browser/,
      use: loaders.null(),
    });
  }

  if (stage === `build-javascript`) {
    const cssExtractIndex = config.plugins.findIndex(
      pl => pl instanceof MiniCssExtractPlugin
    );

    config.plugins[cssExtractIndex] = new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[name].css`,
      ignoreOrder: true,
    });

    config.output = {
      filename: `[name].js`,
      chunkFilename: `[name].js`,
      path: getConfig().output.path,
      publicPath: getConfig().output.publicPath,
    };
  }

  actions.replaceWebpackConfig(config);
};
