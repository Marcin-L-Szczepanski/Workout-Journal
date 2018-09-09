import exerciseCategories from "./exercise-categories.js";

const WorkoutJournal = (function() {
  const init = () => {
    cacheDOM();
    bindEvents();
  };

  // Shorthand functions
  const get = element => document.getElementById(element);
  const newElement = element => document.createElement(element);
  const click = (element, action) => element.addEventListener("click", action);
  const showPage = page => page.classList.remove("page--hidden");
  const hidePage = page => page.classList.add("page--hidden");

  let DOM = {};

  const cacheDOM = () => {
    DOM.createNewPlanBtn = get("create-plan-btn");
    DOM.newPlanPage = get("new-plan-page");
  };

  const bindEvents = () => {
    click(DOM.createNewPlanBtn, openNewPlanPage);
  };

  const openNewPlanPage = () => {
    renderNewPlanPage();
    showPage(DOM.newPlanPage);
  };

  const renderNewPlanPage = () => {
    const name = newElement("input");
    const exercisesList = newElement("div");
    const saveNewPlanBtn = newElement("button");
    saveNewPlanBtn.innerHTML = "Save Plan";

    exercisesList.classList.add("exercises-list");

    exerciseCategories.forEach(category => {
      const exerciseDiv = newElement("div");
      const exerciseIcon = newElement("div");

      exerciseIcon.innerHTML = category.icon;
      exerciseIcon.classList.add("exercise-icon");
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
