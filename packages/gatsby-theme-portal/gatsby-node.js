/* eslint-disable no-console */
const path = require('path');
const { getPagePath } = require('./scripts/utils');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const createLandingPages = require('./scripts/build/createLandingPages');
const createHowtoPages = require('./scripts/build/createHowtoPages');
const createProductPages = require('./scripts/build/createProductPages');
const createFeaturePages = require('./scripts/build/createFeaturePages');
const createGalleryPages = require('./scripts/build/createGalleryPages');
const express = require(`express`);

exports.onCreateDevServer = ({ app }) => {
  app.use(
    express.static(path.resolve(process.cwd(), `../gatsby-theme-portal/static`))
  );
};

exports.createResolvers = ({ createResolvers }) => {
  const pathResolver = {
    path: {
      type: 'String',
      resolve(source, args, context, info) {
        const parentPage = source.parentPage
          ? context.nodeModel.getNodeById({
              id: source.parentPage._ref,
            })
          : null;

        return getPagePath({
          slug: source.slug,
          parentPage,
        });
      },
    },
  };

  createResolvers({
    SanityHowToArticle: pathResolver,
    SanityGalleryArticle: pathResolver,
    SanityFeatureArticle: pathResolver,
    SanityLandingPage: pathResolver,
    SanityProduct: pathResolver,
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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

  await Promise.all(pagesCreators);
};

exports.onCreateWebpackConfig = ({
  actions,
  getConfig,
  stage,
  loaders,
  plugins,
}) => {
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
            components: {
              test: /[\\/]components[\\/]/,
              chunks: 'all',
              priority: 1,
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
