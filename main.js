import exerciseCategories from "./exercise-categories.js";
import renderNewPlanPage from "./render-new-plan-page.js";
import $ from "./shorthand-functions.js";

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

  const renderNewPlanPage = () => {
    const name = newElement("input");
    const exercisesList = newElement("div");
    exercisesList.classList.add("exercises-list");
    const saveNewPlanBtn = newElement("button");
    saveNewPlanBtn.innerHTML = "Save Plan";

    exerciseCategories.forEach(category => {
      const exerciseDiv = newElement("div");
      const exerciseIcon = newElement("div");

      exerciseIcon.innerHTML = category.icon;
      exerciseIcon.classList.add("exercise__icon");
      exerciseDiv.addEventListener("click", () => {
        openNewPlanExercisePage(category);
      });

      exerciseDiv.appendChild(exerciseIcon);
      exercisesList.appendChild(exerciseDiv);
    });

    saveNewPlanBtn.addEventListener("click", () => {
      saveNewPlan(name);
    });

    DOM.newPlanPage.appendChild(name);
    DOM.newPlanPage.appendChild(exercisesList);
    DOM.newPlanPage.appendChild(saveNewPlanBtn);
  };

  return {
    init: init
  };
})();

WorkoutJournal.init();
