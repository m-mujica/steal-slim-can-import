var DefineMap = require("can-define/map/map");

var AppState = DefineMap.extend("AppState", {
  title: {
    type: "string",
    value: "Hello, world!"
  }
});

module.exports = AppState;
