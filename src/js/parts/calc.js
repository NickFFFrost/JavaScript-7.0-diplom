function calc() {

	let calc = document.querySelector(".calc"),
      size = document.querySelector("#size"),
      material = document.querySelector("#material"),
      additOptions = document.querySelector("#options"),
      promocode = document.querySelector(".promocode"),
      calcPrice = document.querySelector(".calc-price");

  let calculate = () => {

    if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {

      let total = +size.options[size.selectedIndex].value + +material.options[material.selectedIndex].value;

      if (additOptions.options.selectedIndex > 0) {
        total += +additOptions.options[additOptions.selectedIndex].value;
      }
      if (promocode.value === "IWANTPOPART") {
        total -= (total *(30 / 100));
      }
      calcPrice.innerHTML = total + "Рублей";
    } else {
      calcPrice.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
    }

  };

  document.addEventListener("change", event => {
    let target = event.target;
    if (target.tagName == "SELECT" || target.tagName == "INPUT") {
      calculate();  
    }
  });

}

module.exports = calc;