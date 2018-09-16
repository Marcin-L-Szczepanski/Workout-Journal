import $ from "../lib/shorthand-functions.js";
import { DOM } from "../lib/DOM.js";

const renderNewPlanExercisePage = exercise => {
  DOM.exercisePage.innerHTML = "";

  const exerciseDetails = $.newElement("div");
  exerciseDetails.classList.add("exercise");
  exerciseDetails.innerHTML = `<h2 class='exercise__name'>${
    exercise.name
  }</h2>`;

  const weightLabel = $.newElement("label");
  weightLabel.setAttribute("for", "weightInput");
  weightLabel.innerHTML = "Start weight:";
  const weightInput = $.newElement("input");
  weightInput.setAttribute("id", "weightInput");
  weightInput.setAttribute("type", "tel");

  const setsLabel = $.newElement("label");
  setsLabel.setAttribute("for", "setsInput");
  setsLabel.innerHTML = "Number of sets:";
  const setsInput = $.newElement("select");
  setsInput.setAttribute("id", "setsInput");
  let options = "";
  for (let i = 1; i <= 6; i++) {
    i === 4
      ? (options += `<option selected="selected">${i}</option>`)
      : (options += `<option>${i}</option>`);
  }
  setsInput.innerHTML = options;

  const repsLabel = $.newElement("label");
  repsLabel.setAttribute("for", "repsInput");
  repsLabel.innerHTML = "Number of reps:";
  const repsInput = $.newElement("select");
  repsInput.setAttribute("id", "repsInput");
  options = "";
  for (let i = 1; i <= 20; i++) {
    i === 8
      ? (options += `<option selected="selected">${i}</option>`)
      : (options += `<option>${i}</option>`);
  }
  repsInput.innerHTML = options;

  const returnBtn = $.newElement("button");
  const saveExerciseBtn = $.newElement("button");

  returnBtn.innerHTML = "Return";
  saveExerciseBtn.innerHTML = "Save";

  returnBtn.addEventListener("click", $.returnPage);
  saveExerciseBtn.addEventListener("click", () => {
    let newExercise = {};
    newExercise.name = exercise.name;
    newExercise.icon = exercise.icon;
    newExercise.weight = weightInput.value;
    newExercise.sets = [];
    for (let i = 0; i < setsInput.value; i++) {
      let set = {
        reps: repsInput.value,
        complete: false
      };
      newExercise.sets.push(set);
    }
    saveExercise(newExercise);
    //renderWorkoutPage();
    $.hidePage(DOM.exercisePage);
  });

  DOM.exercisePage.appendChild(returnBtn);
  exerciseDetails.appendChild(weightLabel);
  exerciseDetails.appendChild(weightInput);
  exerciseDetails.appendChild(setsLabel);
  exerciseDetails.appendChild(setsInput);
  exerciseDetails.appendChild(repsLabel);
  exerciseDetails.appendChild(repsInput);
  DOM.exercisePage.appendChild(exerciseDetails);
  DOM.exercisePage.appendChild(saveExerciseBtn);
};

let newPlanExercises = [];

export const saveExercise = newExercise => {
  newPlanExercises.push(newExercise);

  return newPlanExercises;
};

export default renderNewPlanExercisePage;
