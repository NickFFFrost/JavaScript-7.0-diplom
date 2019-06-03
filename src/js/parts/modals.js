function modals() {

  let popupConsultation = document.querySelector(".popup-consultation"),
      popupDesign = document.querySelector(".popup-design"),
      popupGift = document.querySelector(".popup-gift"),
      popupDialog = document.querySelectorAll(".popup-dialog");

  let popupActive = (element, displayPopup, overflowPopup) => {
    element.style.display = displayPopup;
    document.body.style.overflow = overflowPopup;
  };

  document.addEventListener("click", event => {
    let target = event.target;

    if (target.classList.contains("button-design")) {
      popupActive(popupDesign, "block", "hidden");
    }
    if (target.classList.contains("popup-close") || target.classList.contains("popup-consultation")) {
      popupActive(popupDesign, "none", "");
    }

    if (target.classList.contains("button-consultation")) {
      popupActive(popupConsultation, "block", "hidden");
    }
    if (target.classList.contains("popup-close") || target.classList.contains("popup-consultation")) {
      popupActive(popupConsultation, "none", "");
    }

    if (target.classList.contains("fixed-gift")) {
      popupActive(popupGift, "block", "hidden");
    }
    if (target.classList.contains("popup-close") || target.classList.contains("popup-gift")) {
      popupActive(popupGift, "none", "");
    }
  });
  console.log("модуль модальных окон");
}

module.exports = modals;