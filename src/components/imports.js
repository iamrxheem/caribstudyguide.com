import { Helmet } from "react-helmet"
import React from "react"

const Imports = props => {
  return (
    <>
      <>
        <Helmet>
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
          <meta
            name="google-site-verification"
            content="5rLcTvmtCQjDdX7_SylgDyTTz6B5VLf86AW2rp_-g-A"
          />
          <script src="https://cxcguide.pushengage.com/service-worker.js?ver=2.2.0"></script>
          <script async src="//static.getclicky.com/js"></script>
          <link
            href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
            rel="stylesheet"
            type="text/css"
          />
          <meta
            name="msvalidate.01"
            content="31F1DDC9C4BA2ECA7EDBAFE824702996"
          />
          <script
            src="https://clientcdn.pushengage.com/core/37727c5d-77dc-444e-9ca2-fe6fe6d6.js"
            async
          ></script>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
      </>
    </>
  )
}

export default Imports
