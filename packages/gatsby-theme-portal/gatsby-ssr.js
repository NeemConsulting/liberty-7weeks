const React = require('react');

const headComponents = [];

headComponents.push(
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
            (function(a, h){
              var botsRegexp = /aolbuild|baidu|bingbot|bingpreview|msnbot|duckduckgo|adsbot-google|googlebot|mediapartners-google|teoma|slurp|yandex/gi;
              window.searchAgentOnPage = h && h==='#noquiz' || botsRegexp.test(a);
            })(navigator.userAgent, location.hash);
            `,
    }}
    id="botDetector"
  />,
  <meta charSet="utf-8" />,
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />,
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
);

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(headComponents);
};
