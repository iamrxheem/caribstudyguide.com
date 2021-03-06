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
          content: `CXC Study Guide, contact@cxcguide.com`
        },
        { name: `distribution`, content: `Global` },
        { name: `coverage`, content: `Worldwide` },
        { name: `language`, content: `EN` },
        { name: `reply-to`, content: `contact@cxcguide.com` },
        { name: `rating`, content: `General` },
        { name: `og:email`, content: `contact@cxcguide.com` },
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
    />
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
