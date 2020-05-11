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
      </>
    </>
  )
}

export default Imports
