import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        { name: `copyright`, content: `CXC Study Guide` },
        {
          name: `author`,
          content: `Caribbean Study Guide, info@caribbeanstudyguide.com`
        },
        { name: `distribution`, content: `Global` },
        { name: `coverage`, content: `Worldwide` },
        { name: `language`, content: `EN` },
        { name: `reply-to`, content: `info@caribbeanstudyguide.com` },
        { name: `rating`, content: `General` },
        { name: `og:email`, content: `info@caribbeanstudyguide.com` },
        { name: `og:country-name`, content: `JAM` },
        { name: `apple-mobile-web-app-capable`, content: `yes` },
        {
          name: `robots`,
          content: `archive,follow,imageindex,index,odp,snippet,translate`
        },
        { name: `target`, content: `all` },
        { name: `audience`, content: `all` },
        { name: `designer`, content: `CXC Study Guide` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` },
        { name: ``, content: `` }
      ].concat(meta)}
    >
      <script
        type="text/javascript"
        src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
        data-dojo-config="usePlainJson: true, isDebug: false"
      ></script>
      <script
        data-ad-client="ca-pub-7216279079459124"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <script
        src="https://kit.fontawesome.com/3b83e0293b.js"
        crossorigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>
      <script
        src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
        async=""
      ></script>
      <meta
        name="google-site-verification"
        content="5rLcTvmtCQjDdX7_SylgDyTTz6B5VLf86AW2rp_-g-A"
      />
      <script async src="//static.getclicky.com/js"></script>
      <link
        href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
