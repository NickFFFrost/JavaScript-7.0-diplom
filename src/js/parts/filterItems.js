function filterItems() {

  let portfolioNo = document.querySelector(".portfolio-no"),
      portfolioBlock = document.querySelectorAll(".portfolio-block"),
      portfolioMenu = document.querySelector(".portfolio-menu"),
      portfolioMenuLi = document.querySelectorAll(".portfolio-menu > li");

  portfolioMenu.addEventListener("click", event => {

    let target = event.target,
        noContent = true,
        classActive = target.getAttribute("class");

    portfolioMenuLi.forEach((item) => {
      item.classList.remove("active");
    });

    target.classList.add("active");

    if (target && target.tagName == "LI") {

      for (let i = 0; i < portfolioBlock.length; i++) {

        if (portfolioBlock[i].classList.contains(classActive)) {
          portfolioBlock[i].style.display = "block";
          noContent = false;
        } else {
          portfolioBlock[i].style.display = "none";
        }
      }
      if (noContent === false) {
        portfolioNo.style.display = "none";
      }
      if (noContent === true) {
        portfolioNo.style.display = "block";
      }
    }

  });

}

module.exports = filterItems;
