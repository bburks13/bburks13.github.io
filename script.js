var modal = document.getElementById("myModal");


var btnImage1 = document.getElementById("btnImage1");
var btnImage2 = document.getElementById("btnImage2");
var btnImage3 = document.getElementById("btnImage3");
var btnImage4 = document.getElementById("btnImage4");
var modalImg = document.getElementById("modalImg");
var closeBtn = document.getElementsByClassName("close")[0];


function openModal(imageSrc, mapKeySrc, text) {
  modal.style.display = "block";
  modalImg.src = imageSrc;
  document.getElementById("modalText").textContent = text;
  document.getElementById("mapKeyImg").src = mapKeySrc; 
  document.getElementById("mapKeyImg").style.display = "block"; // TESTING TESTING // TESTING TESTING // TESTING TESTING
}

// Event listeners for the buttons
btnImage1.addEventListener("click", function() {
  openModal("ACM F4 3D.png", "ACMmapkey.png","This is LEVEL 4 (MAP NOT INTERACTABLE)");
});

btnImage2.addEventListener("click", function() {
  openModal("ACM F3 3D.png", "ACMmapkey.png", "This is LEVEL 3 (MAP NOT INTERACTABLE)");
});

btnImage3.addEventListener("click", function() {
  openModal("ACM F2 3D.png", "ACMmapkey.png", "This is LEVEL 2 (MAP NOT INTERACTABLE)");
});

btnImage4.addEventListener("click", function() {
  openModal("ACM F1 3D.png", "ACMmapkey.png", "This is LEVEL 1 (MAP NOT INTERACTABLE)");
});


closeBtn.onclick = function() {
  modal.style.display = "none";
};


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
