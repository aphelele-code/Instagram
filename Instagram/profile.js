const close = document.getElementById("close");
const modal = document.getElementById("modal-container");
const openModal = document.getElementById("open-modal");

close.addEventListener("click", function(){
   modal.style.display = "none"
});

openModal.addEventListener("click", function(){
    modal.style.display = "flex";
});



