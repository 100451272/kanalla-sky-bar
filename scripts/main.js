function alertMessage(text) {
  alert(text);
}

function goBurger() {
  document.location.href = "kanalla-burger.html";
}

function goBrunch() {
  document.location.href = "kanalla-brunch.html";
}

window.onload = function() {
  if (document.location.href.includes("kanalla-burger")) {
    document.getElementsByClassName("popup")[0].style.opacity = 100;
  }
}

function closePopup() {
  document.getElementsByClassName("popup")[0].style.opacity = 0;
  document.getElementsByClassName("popup")[0].style.display = "none";
}