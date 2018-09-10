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

export default renderNewPlanPage;
