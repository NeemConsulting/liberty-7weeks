const path = require('path');

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.tl-ph'),
});
require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.development'),
});

module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-theme-portal`,
      options: {
        themeConfig: {
          meta_host: process.env['app_local_host'],
          meta_lang: process.env['app_local_locale'],
          site_name: process.env['app_local_siteName'],
          sanity_id: process.env['app_local_sanityId'],
          sanity_dataset: process.env['app_local_sanityDataset'],
          sanity_token: process.env['app_local_sanityToken']
        }
      },
    },
  ],
};
