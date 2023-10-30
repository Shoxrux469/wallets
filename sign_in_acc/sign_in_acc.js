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
      // console.log(item);
      if(item === undefined) {
        email_inp.classList.add('error')
      } else {
        email_inp.classList.remove('error')
      }
      if (password_inp.value === item.password) {
        document.location.href = `/?=${item.id}`;
        password_inp.classList.remove('error')
      } else {
        password_inp.classList.add('error')
      }
    });
};
