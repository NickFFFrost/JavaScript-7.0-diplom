window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modals = require("./parts/modals.js"),
      calc = require("./parts/calc.js"),
      filterItems = require("./parts/filterItems.js"),
      forms = require("./parts/forms.js"),
      slider = require("./parts/slider.js"),
      accordeon = require("./parts/accordeon.js");

    modals();
    calc();
    filterItems();
    forms();
    slider();
    accordeon();

});