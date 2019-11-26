module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cd-store/'
    : '/',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/cd-store/'
    : '/'
}
