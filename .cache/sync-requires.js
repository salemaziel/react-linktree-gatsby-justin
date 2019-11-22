const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pc/testing-code/react-linktree-gatsby-justin/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/pc/testing-code/react-linktree-gatsby-justin/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/pc/testing-code/react-linktree-gatsby-justin/src/pages/page-2.js"))),
  "component---src-pages-shop-js": hot(preferDefault(require("/home/pc/testing-code/react-linktree-gatsby-justin/src/pages/shop.js")))
}

