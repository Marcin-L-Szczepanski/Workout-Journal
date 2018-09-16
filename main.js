"use strict";

import { cacheDOM, bindEvents } from "./lib/DOM.js";
import { savedPlans } from "./lib/local-storage.js";

const WorkoutJournal = (function() {
  const init = () => {
    let DOM = cacheDOM();
    if (savedPlans() !== null) {
      DOM.startWorkoutBtn.classList.remove("hidden");
    }
    bindEvents();
  };

  return {
    init: init
  };
})();

WorkoutJournal.init();
