var link = document.querySelector(".brn-write");
  
var popup = document.querySelector(".modal-email");
var close = popup.querySelector(".modal-close");
  
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});