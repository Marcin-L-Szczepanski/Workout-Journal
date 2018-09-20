import $ from "../lib/shorthand-functions.js";
import { DOM } from "../lib/DOM.js";
import exerciseCategories from "../lib/exercise-categories.js";
import renderNewPlanExercisePage from "../pages/render-new-plan-exercise-page.js";
import { readNewPlanExercises } from "../pages/render-new-plan-exercise-page.js";
import { savedPlans } from "../lib/local-storage.js";

const renderNewPlanPage = newPlanPage => {
  DOM.newPlanPage.innerHTML = "";

  const nameLabel = $.newElement("label");
  nameLabel.setAttribute("for", "name-input");
  nameLabel.innerHTML = "Plan name:";
  const nameInput = $.newElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name-input");

  const exercisesListLabel = $.newElement("h3");
  exercisesListLabel.innerHTML = "Select exercises to add them to your plan";
  const exercisesList = $.newElement("ul");
  exercisesList.classList.add("exercises-list");
  const saveNewPlanBtn = $.newElement("button");
  saveNewPlanBtn.innerHTML = "Save Plan";

  exerciseCategories.forEach(category => {
    let exerciseCategory = renderCategory(category);
    exercisesList.appendChild(exerciseCategory);
  });

  saveNewPlanBtn.addEventListener("click", () => {
    saveNewPlan(nameInput);
    $.hidePage(DOM.newPlanPage);
  });

  newPlanPage.appendChild(nameLabel);
  newPlanPage.appendChild(nameInput);
  newPlanPage.appendChild(exercisesListLabel);
  newPlanPage.appendChild(exercisesList);
  newPlanPage.appendChild(saveNewPlanBtn);
};

const renderCategory = category => {
  const exerciseCategory = $.newElement("li");
  const exerciseIcon = $.newElement("div");

  exerciseCategory.classList.add("exercise__category");
  exerciseIcon.innerHTML = category.icon;
  exerciseCategory.addEventListener("click", () => {
    openNewPlanExercisePage(category);
  });

  exerciseCategory.appendChild(exerciseIcon);

  return exerciseCategory;
};

const openNewPlanExercisePage = exercise => {
  renderNewPlanExercisePage(exercise);
  $.showPage(DOM.exercisePage);
};

const saveNewPlan = name => {
  let storagePlans;
  if (savedPlans() !== null) {
    storagePlans = JSON.parse(savedPlans());
  } else {
    storagePlans = [];
  }

  let newPlanExercises = readNewPlanExercises();
  let newPlan = {};
  newPlan.name = name.value;
  newPlan.exercises = newPlanExercises;
  newPlan = JSON.stringify(newPlan);
  storagePlans.push(newPlan);
  localStorage.plans = JSON.stringify(storagePlans);
  if (storagePlans.length === 1) {
    DOM.startWorkoutBtn.classList.remove("hidden");
  } else {
    DOM.startWorkoutBtn.classList.add("hidden");
    DOM.selectWorkoutBtn.classList.remove("hidden");
  }
};

export default renderNewPlanPage;
