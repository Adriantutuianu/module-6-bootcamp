function keydownAction(event) {
  // TODO: Complete keydown function
  var keyPress = event.key;
  var code = event.code;

  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = code;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

document.addEventListener("keyup", keyupAction);
