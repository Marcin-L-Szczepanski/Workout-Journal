import $ from "./shorthand-functions.js";
import renderNewPlanPage from "../pages/render-new-plan-page.js";
import renderWorkoutPage from "../pages/render-workout-page.js";

export let DOM = {};

export const cacheDOM = () => {
  DOM.createNewPlanBtn = $.get("create-plan-btn");
  DOM.selectWorkoutBtn = $.get("select-workout-btn");
  DOM.startWorkoutBtn = $.get("start-workout-btn");
  DOM.newPlanPage = $.get("new-plan-page");
  DOM.exercisePage = $.get("exercise-page");
  DOM.workoutPage = $.get("workout-page");

  return DOM;
};

export const bindEvents = () => {
  $.click(DOM.createNewPlanBtn, openNewPlanPage);
  $.click(DOM.startWorkoutBtn, openWorkoutPage);
};

const openNewPlanPage = () => {
  renderNewPlanPage(DOM.newPlanPage);
  $.showPage(DOM.newPlanPage);
};

const openWorkoutPage = () => {
  renderWorkoutPage();
  $.showPage(DOM.workoutPage);
};
