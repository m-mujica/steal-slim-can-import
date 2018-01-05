var path = require("path");
var stealTools = require("steal-tools");

stealTools
  .optimize({}, { minify: false })
  .then(() => console.log("done!"))
  .catch(e => console.error(e));
