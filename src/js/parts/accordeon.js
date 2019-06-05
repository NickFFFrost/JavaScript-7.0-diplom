function accordeon() {

  let accordion = document.querySelector("#accordion"),
      titleAccordion = document.querySelectorAll(".accordion-heading"),
      accordionContent = document.querySelectorAll(".accordion-block");


  for (let i = 0; i < titleAccordion.length; i++) {
    titleAccordion[i].addEventListener("click", () =>{
      for (let item = 0; item < accordionContent.length; item++) {
        accordionContent[item].classList.remove("ui-accordion-content-on");
        titleAccordion[item].classList.remove("ui-accordion-header-active");
        accordionContent[i].classList.add("animated", "fadeInDown");
      }
      accordionContent[i].classList.toggle("ui-accordion-content-on");
      titleAccordion[i].classList.toggle("ui-accordion-header-active");
    })
  }
}

module.exports = accordeon;
