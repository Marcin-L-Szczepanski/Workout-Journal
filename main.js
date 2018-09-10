import $ from "./shorthand-functions.js";
import exerciseCategories from "./exercise-categories.js";
import renderNewPlanPage from "./render-new-plan-page.js";

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
    renderNewPlanPage();
    $.showPage(DOM.newPlanPage);
  };

  return {
    init: init
  };
})();

WorkoutJournal.init();
