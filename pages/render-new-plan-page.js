import $ from "../shorthand-functions.js";

const renderCategory = category => {
  const exerciseDiv = $.newElement("div");
  const exerciseIcon = $.newElement("div");

  exerciseIcon.innerHTML = category.icon;
  exerciseIcon.classList.add("exercise__icon");
  exerciseDiv.addEventListener("click", () => {
    openNewPlanExercisePage(category);
  });

  exerciseDiv.appendChild(exerciseIcon);
  exercisesList.appendChild(exerciseDiv);
};

const renderNewPlanPage = () => {
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
    renderCategory(category);
  });

  saveNewPlanBtn.addEventListener("click", () => {
    saveNewPlan(name);
  });

  DOM.newPlanPage.appendChild(nameLabel);
  DOM.newPlanPage.appendChild(nameInput);
  DOM.newPlanPage.appendChild(exercisesList);
  DOM.newPlanPage.appendChild(saveNewPlanBtn);
};

export default renderNewPlanPage;
