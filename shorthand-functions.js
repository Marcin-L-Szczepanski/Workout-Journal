  "use strict";
  
  // Shorthand functions
  const $ = {
    get = element => document.getElementById(element),
    newElement = element => document.createElement(element),
    click = (element, action) => element.addEventListener("click", action),
    showPage = page => page.classList.remove("page--hidden"),
    hidePage = page => page.classList.add("page--hidden"),
  };

  export default $;