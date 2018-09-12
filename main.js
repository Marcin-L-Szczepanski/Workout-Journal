"use strict";

import { cacheDOM, bindEvents } from "./lib/DOM.js";

const WorkoutJournal = (function() {
  const init = () => {
    cacheDOM();
    bindEvents();
  };

  return {
    init: init
  };
})();

WorkoutJournal.init();
