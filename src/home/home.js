var view = require("./home.stache");
var Component = require("can-component");
var DefineMap = require("can-define/map/map");

var HomeVm = DefineMap.extend("HomeVm", {});

Component.extend({
  view: view,
  tag: "x-home",
  ViewModel: HomeVm
});
