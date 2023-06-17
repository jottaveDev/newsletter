const form = document.querySelector("form");
const modal = document.querySelector("[data-modal]");
const modalButton = document.querySelector("[data-modal='button']");
const emailInput = document.querySelector("#email");
const modalParagraph = document.querySelector(".modal p");

function toggleModal(event) {
  event.preventDefault();
  modal.classList.toggle("ativo");
  modalParagraph.innerText = `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription.`;
  emailInput.value = "";
}

function formValidity(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("erro");
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove("erro");
    target.nextElementSibling.innerText = "";
  }
}

form.addEventListener("change", formValidity);
form.addEventListener("submit", toggleModal);
modalButton.addEventListener("click", toggleModal);
