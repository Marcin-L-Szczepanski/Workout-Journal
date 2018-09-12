import $ from "./shorthand-functions.js";
import renderNewPlanPage from "../pages/render-new-plan-page.js";

let DOM = {};

export const cacheDOM = () => {
  DOM.createNewPlanBtn = $.get("create-plan-btn");
  DOM.newPlanPage = $.get("new-plan-page");
  DOM.exercisePage = $.get("exercise-page");

  return DOM;
};

export const bindEvents = () => {
  $.click(DOM.createNewPlanBtn, openNewPlanPage);
};

const openNewPlanPage = () => {
  renderNewPlanPage(DOM.newPlanPage);
  $.showPage(DOM.newPlanPage);
};
