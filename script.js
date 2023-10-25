let email = document.querySelectorAll(".user_email");
let table = document.querySelector(".top_table");
let wallets_box = document.querySelector(".my_wallets");
let user_name = document.querySelector(".user_name");
let base_url = "http://localhost:8080";
function updateData() {
  fetch(base_url + "/users")
    .then((res) => res.json())
    .then((res) => reload(res, wallets_box));
}

updateData();

function reload(arr, place) {
  // place.innerHTML = ''

  for (let item of arr) {
    let my_wallets = document.createElement("div");
    let h2 = document.createElement("h2");
    let div = document.createElement("div");
    let visa = document.createElement("p");
    let currency = document.createElement("span");
    let a = document.createElement("a");

    my_wallets.classList.add("my_wallets");
    h2.innerHTML = "Мои кошельки";
    visa.innerHTML = "Visa";
    currency.innerHTML = "RUB";
    currency.classList.add("currency");
    a.innerHTML = "Смотреть все кошельки";

    div.append(visa, currency);
    my_wallets.append(h2, div, a);

    email.forEach((email) => {
      email.innerHTML = item.email;
    });
    user_name.innerHTML = item.surname + ' ' + item.name
  }
}
