import $ from "../shorthand-functions.js";
import exerciseCategories from "../exercise-categories.js";

const renderCategory = category => {
  const exerciseDiv = $.newElement("div");
  const exerciseIcon = $.newElement("div");

  exerciseIcon.innerHTML = category.icon;
  exerciseIcon.classList.add("exercise__icon");
  exerciseDiv.addEventListener("click", () => {
    openNewPlanExercisePage(category);
  });

  exerciseDiv.appendChild(exerciseIcon);

  return exerciseDiv;
};

const renderNewPlanPage = newPlanPage => {
  const nameLabel = $.newElement("label");
  nameLabel.setAttribute("for", "name-input");
  const nameInput = $.newElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name-input");

  const exercisesList = $.newElement("div");
  exercisesList.classList.add("exercises-list");
  const saveNewPlanBtn = $.newElement("button");
  saveNewPlanBtn.innerHTML = "Save Plan";

  exerciseCategories.forEach(category => {
    let exerciseDiv = renderCategory(category);
    exercisesList.appendChild(exerciseDiv);
  });

  saveNewPlanBtn.addEventListener("click", () => {
    saveNewPlan(name);
  });

  newPlanPage.appendChild(nameLabel);
  newPlanPage.appendChild(nameInput);
  newPlanPage.appendChild(exercisesList);
  newPlanPage.appendChild(saveNewPlanBtn);
};

export default renderNewPlanPage;
