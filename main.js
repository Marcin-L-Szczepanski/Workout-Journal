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
    console.log("bla");
    showPage(DOM.newPlanPage);
  };

  return {
    init: init
  };
})();

WorkoutJournal.init();
