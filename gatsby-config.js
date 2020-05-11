module.exports = {
  siteMetadata: {
    siteUrl: `https://www.cxcguide.com`,
    title: `CXC Study Guide`,
    description: `Online study guide for Caribbean students including CSEC, CAPE, PEP and more.`,
    author: `cxcstudyguide`
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#01C8EF`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-clicky`,
      options: {
        siteId: "101253680"
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.cxcguide.com`,
        stripQueryString: true
      }
    }
  ]
}
