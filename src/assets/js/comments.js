if (process.browser) {
  var jv_comments_config = {
    website_id: 242,
    is_open: "false",
    position: "left"
  }

  ;(function() {
    var d = document,
      s = d.createElement("script")
    s.src = "https://widget.jointcomments.com/e/embed.prod.js"
    if (/MSIE|Trident/.test(window.navigator.userAgent)) {
      s.src = "https://widget.jointcomments.com/e/embed.prodIE.js"
    }
    ;(d.head || d.body).appendChild(s)
  })()
}
