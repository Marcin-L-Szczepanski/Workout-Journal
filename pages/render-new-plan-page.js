import $ from "../lib/shorthand-functions.js";
import exerciseCategories from "../lib/exercise-categories.js";

const renderNewPlanPage = newPlanPage => {
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
    saveNewPlan(name);
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

export default renderNewPlanPage;
