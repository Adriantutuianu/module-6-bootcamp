const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  const element = event.target;

  // TODO: Complete function
  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      //get number from data-number and we set it as the text content for the current box
      element.textContent = element.dataset.number;
      element.dataset.state = "visible";
    } else {
      element.textContent = "";
      element.setAttribute("data-state", "hidden");
    }
  }
});
