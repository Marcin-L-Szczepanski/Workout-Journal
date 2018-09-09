const WorkoutJournal = (function() {
  const init = () => {
    console.log("initialize");
  };

  // Shorthand functions
  const get = element => document.getElementById(element);

  let DOM = {};

  const cacheDOM = () => {
    DOM.createNewPlanBtn = get("create-plan-btn");
  };

  const bindEvents = () => {
    click(DOM.createNewPlanBtn, openNewPlanPage);
  };

  return {
    init: init
  };
})();

WorkoutJournal.init();
