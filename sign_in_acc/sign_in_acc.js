let form = document.querySelector("form");
let email_inp = document.querySelector(".email");
let password_inp = document.querySelector(".password");
let inps = form.querySelectorAll("input");

let base_url = "http://localhost:8080";

form.onsubmit = (e) => {
  e.preventDefault();

  fetch(base_url + "/users")
    .then((res) => res.json())
    .then((res) => {
      let item = res.find((item) => email_inp.value == item.email);
      if (password_inp.value === item.password) {
        document.location.href = `./index.html?=${item.id}`;
      }
    });
};
