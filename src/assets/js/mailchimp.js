import $ from "jquery"

if (process.browser) {
  $(document).ready(function() {
    try {
      window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
        L.start({
          baseUrl: "mc.us18.list-manage.com",
          uuid: "11c71b70324980ffe7d8500a6",
          lid: "3c1d97be12",
          uniqueMethods: true
        })
      })
    } catch (err) {
      console.log(err)
    }
  })
}
