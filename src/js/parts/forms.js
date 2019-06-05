function forms() {

  let message = {
      loading: "Загрузка...",
      success: "Спасибо! Мы скоро с вами свяжемся!",
      failure: "Что-то пошло не так..."
  };

  let statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  let formSend = (element) => {

    element.appendChild(statusMessage);
    let contentFormPopup = element.querySelector(".content-form-popup");

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    let formData = new FormData(element);

    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });

    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("readystatechange", () => {

      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {

        if (element.classList.contains("popup-form")) {
          contentFormPopup.style.display = "none";
          statusMessage.innerHTML = message.success;
          setInterval( () => { 
            contentFormPopup.style.display = "block";
            element.removeChild(statusMessage);
          },5000);
        } else {
          statusMessage.innerHTML = message.success;
        }

      } else {

        if (element.classList.contains("popup-form")) {
          contentFormPopup.style.display = "none";
          statusMessage.innerHTML = message.failure;
          setInterval( () => { 
            contentFormPopup.style.display = "block";
            element.removeChild(statusMessage);
          },5000);
        } else {
          statusMessage.innerHTML = message.failure;
        }

      }
    });

    for (let i = 0; i < element.length; i++) {
      element[i].value = "";
    }
  };

  document.addEventListener("input", event => {
    if (event.target.getAttribute("name") === "phone") {
      event.target.value = "+" + event.target.value.replace(/[^0-9]/g, "").slice(0, 11);
      if (event.target.value.length == 1) {
        event.target.value = "";
      }
    }
  });

  document.addEventListener("submit", (event) => {
    event.preventDefault();
    formSend(event.target);
  });

}

module.exports = forms;