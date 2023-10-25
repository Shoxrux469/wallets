let form = document.querySelector("form");
let email_inp = document.querySelector(".email");
let password_inp = document.querySelector(".password");

let base_url = "http://localhost:8080";
function updateData() {
  fetch(base_url + "/users")
    .then((res) => res.json())
    .then((res) => reload(res));
}
updateData();

// form.onsubmit = (e) => {
//   e.preventDefault();
// };

function reload(arr) {
  console.log(arr);
  for (let item of arr) {
    subm(item)
    console.log(item);
  }
}
// res.forEach((item) => {
//   if (item.email === email_inp.value && item.password === password_inp.value) {
  
  function subm(item) {
    form.onsubmit = (e) => {
      e.preventDefault();
  
    fetch(base_url + "/users", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (
      item.email === email_inp.value &&
      item.password === password_inp.value
    ) {
      document.location.href = `./index.html`;
    } else if (item.email === email_inp.value) {
      alert("Password is incorrect");
    } else {
      alert("this account doesnt exist");
    }
  };
}
//     document.location.href = "./index.html";
//   } else {
//     alert("Go Home Nigga");
//   }
// });
