// FILENAME: Assignment2
// NAME: RACHAEL AJAYI
// STUDENTID: 301146832
// DATE: 1ND NOVEMBER, 2022
// IIFE -- Immediately Invoked Function Expression
(function () {
  function Start() {
    console.log("App Started...");
    let deletebuttons = document.querySelectorAll(".btn-danger");
    for (button of deletebuttons) {
      button.addEventListener("click", (event) => {
        if (!confirm("Are you sure")) {
          event.preventDefault();
          window.location.assign("/book-list");
        }
      });
    }
  }
  window.addEventListener("load", Start);
})();
