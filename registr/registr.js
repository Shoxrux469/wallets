let form = document.querySelector("form");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let surname = document.querySelector(".surname");
let password = document.querySelector(".password");
let btn = document.querySelector("button");
let inps = form.querySelectorAll("input");
let base_url = "http://localhost:8080";

form.onsubmit = (e) => {
  e.preventDefault();

  let users = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    users[key] = value;
  });

  fetch(base_url + "/users", {
    method: "post",
    body: JSON.stringify(users),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 200 || res.status === 201) {
      let error = false;

      inps.forEach((inp) => {
        if (inp.value.length === 0) {
          inp.classList.add("error");
          error = true;
        } else {
          inp.classList.remove("error");
        }
      });

      if (error === false) {
        document.location.href = `./index.html`;
        form.reset();
      }
    }
  });
};
