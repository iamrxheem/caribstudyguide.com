module.exports = {
  siteMetadata: {
    siteUrl: `https://www.cxcguide.com`,
    title: `CXC Study Guide`,
    description: `The perfect free online study guide for Caribbean CSEC and CAPE students including past papers, study notes quizzes and exercises.`,
    author: `cxcstudyguide`
  },
  plugins: [
    `gatsby-plugin-zeit-now`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-twitter`,
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
        name: `CXC Study Guide`,
        short_name: `Study CXC`,
        start_url: `/`,
        description: `The perfect free online study guide for Caribbean CSEC and CAPE students including past papers, study notes quizzes and exercises.`,
        background_color: `#663399`,
        theme_color: `#01C8EF`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
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
    },

    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `cxcstudyguide`
      }
    }
  ]
}
