module.exports = {
  configureWebpack: {output: {filename: '[name].[hash].bundle.js'}},
  devServer: {
    // disableHostCheck: true,
  },
  pwa: {
    name: 'Enjoy Escape',
    themeColor: '#162b47',
    msTileColor: '#d7b46a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      faviconSVG: 'static/favicon.png',
      favicon32: 'static/favicon-32x32.png',
      favicon16: 'static/favicon-16x16.png',
      appleTouchIcon: 'static/apple-touch-icon-152x152.png',
      msApplicationIcon: 'static/msapplication-icon-144x144.png',
      maskIcon: 'static/safari-pinned-tab.svg',
      msTileImage: 'static/msapplication-icon-144x144.png'
    },
  },
};
