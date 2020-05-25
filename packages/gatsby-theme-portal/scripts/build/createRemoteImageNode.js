const path = require('path');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const config = require('awd-app-config');
const fs = require(`fs-extra`);

module.exports = async (url, id, createNodeField, staticParams) => {
  const imgExt =
    (url && ~url.indexOf('.png') && '.png') ||
    (url && ~url.indexOf('.svg') && '.svg') ||
    '.jpg';

  const isSVG = imgExt === '.svg';
  const file = await createRemoteFileNode({
    url:
      url ||
      'https://prod-headless.unileversolutions.com/api/assets/aem-headless-cms/recepedia/br/pt/site-wide-content/other-images/1.jpg',
    parentNodeId: id,
    ext: imgExt,
    name: 'image',
    httpHeaders: {
      'static-first-api-key': config.getByKey(
        'AemAssetsCredentials_staticFirstApiKey'
      ),
      Authorization: config.getByKey('AemAssetsCredentials_Authorization'),
    },
    ...staticParams,
  });

  if (isSVG) {
    const fileName = `remote-svg-${file.internal.contentDigest}${imgExt}`;
    const publicPath = path.join(process.cwd(), `public`, `static`, fileName);

    if (!fs.existsSync(publicPath)) {
      fs.copy(file.absolutePath, publicPath, err => {
        if (err) {
          console.error(
            `error copying file from ${file.absolutePath} to ${publicPath}`,
            err
          );
        }
      });
    }

    createNodeField({
      node: file,
      name: 'publicURL',
      value: `/static/${fileName}`,
    });
  }

  return file;
};
