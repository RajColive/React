const path = require("path");
const axios = require("axios");

exports.onCreatePage = ({page, actions}) => {

  const { createPage } = actions

  const PropertyTemplate = path.resolve("./src/templates/property-details.js");

  createPage({
    path: "/property/",
    matchPath: "/property/*",
    component: PropertyTemplate
  })
}