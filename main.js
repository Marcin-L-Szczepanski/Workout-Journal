"use strict";

import $ from "./shorthand-functions.js";
import renderNewPlanPage from "./pages/render-new-plan-page.js";

const WorkoutJournal = (function() {
  const init = () => {
    cacheDOM();
    bindEvents();
  };

  let DOM = {};

  const cacheDOM = () => {
    DOM.createNewPlanBtn = $.get("create-plan-btn");
    DOM.newPlanPage = $.get("new-plan-page");
  };

  const bindEvents = () => {
    $.click(DOM.createNewPlanBtn, openNewPlanPage);
  };

  const openNewPlanPage = () => {
    renderNewPlanPage(DOM.newPlanPage);
    $.showPage(DOM.newPlanPage);
  };

  return {
    init: init
  };
})();

WorkoutJournal.init();
