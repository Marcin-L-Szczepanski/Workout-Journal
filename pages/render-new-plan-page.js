import $ from "../shorthand-functions.js";
import exerciseCategories from "../exercise-categories.js";

const renderCategory = category => {
  const exerciseCategory = $.newElement("li");
  const exerciseIcon = $.newElement("div");

  exerciseIcon.innerHTML = category.icon;
  exerciseIcon.classList.add("exercise__icon");
  exerciseCategory.addEventListener("click", () => {
    openNewPlanExercisePage(category);
  });

  exerciseCategory.appendChild(exerciseIcon);

  return exerciseCategory;
};

const renderNewPlanPage = newPlanPage => {
  const nameLabel = $.newElement("label");
  nameLabel.setAttribute("for", "name-input");
  nameLabel.innerHTML = "Plan name:";
  const nameInput = $.newElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name-input");

  const exercisesListLabel = $.newElement("h3");
  exercisesListLabel.innerHTML = "Select categories to add them to your plan";
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

export default renderNewPlanPage;
