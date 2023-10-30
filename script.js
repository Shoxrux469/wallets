let email = document.querySelectorAll(".user_email");
let table = document.querySelector(".top_table");
let wallets_box = document.querySelector(".my_wallets");
let user_name = document.querySelector(".user_name");
let wallets = document.querySelector(".wallets");
let base_url = "http://localhost:8080";
let id = location.search.split("=").at(1);
console.log(id);

function updateData() {
  fetch(base_url + "/users/" + id)
    .then((res) => res.json())
    .then((res) => reload(res));
}

updateData();

function reload(arr) {
  wallets.innerHTML = "";

  let wallet_color = 1

  for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    let visa = document.createElement("p");
    let currency = document.createElement("span");

    div.classList.add("box");

    visa.innerHTML = "Visa";
    currency.innerHTML = "RUB";
    currency.classList.add("currency");

    if (wallet_color == 1) {
      div.classList.add("bg_one");
      wallet_color++;
    } else if (wallet_color == 2) {
      div.classList.add("bg_two");
      wallet_color++;
    } else if (wallet_color == 3) {
      div.classList.add("bg_three");
      wallet_color++;
    } else {
      div.classList.add("bg_four");
      wallet_color = 1;
    }

    wallets.append(div);
    div.append(visa, currency);
  }
  email.forEach((email) => {
    email.innerHTML = arr.email;
  });
  user_name.innerHTML = arr.surname + " " + arr.name;
}