const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector('.show-success')
const modalMain = document.getElementById("modal_main");
const modalsClose = document.querySelectorAll(".modal__close");

modalMain.classList.add('modal_active');

for(let modalClose of modalsClose) {
  modalClose.onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
  }
}

showSuccess.addEventListener('click', () => {
  modalSuccess.classList.add('modal_active');
})