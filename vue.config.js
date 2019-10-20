module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cd-store/'
    : '/',
  chainWebpack: config => {
    // Images optimization
    config.module
      .rule('image-webpack-loader')
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .tap(options => {
        const optns = options || {};
        optns.mozjpeg = {
          progressive: true,
          quality: 65
        };
        optns.optipng = {
          enabled: false
        };
        optns.pngquant = {
          quality: [0.65, 0.90],
          speed: 4
        };
        optns.gifsicle = {
          interlaced: false
        };
        optns.webp = {
          quality: 75
        };
        optns.svgo = {
          removeDimensions: false
        }
        return optns
      })
      .end()
  }
}
