let email = document.querySelectorAll(".user_email");
let table = document.querySelector(".top_table");
let wallets_box = document.querySelector(".my_wallets");
let user_name = document.querySelector(".user_name");
let wallets = document.querySelector(".wallets");
let all_wallets = document.querySelector(".all_wallets");
let all_transactions = document.querySelector(".all_transactions");
let base_url = "http://localhost:8080";
let id = location.search.split("=").at(1);
console.log(id);

function updateData() {
  fetch(base_url + "/users/" + id)
    .then((res) => res.json())
    .then((res) => {
      reload(res)
      console.log(res);
      all_wallets.href = `./add_wallets/add_walle ts.html?=${res.id}`
      all_transactions.href = `./add_transactions/add_transactions.html?=${res.id}`
    });
}

updateData();

function reload(arr) {
  email.forEach((email) => {
    email.innerHTML = arr.email;
  });
  user_name.innerHTML = arr.surname + " " + arr.name;

}

function updateWallets() {
  axios.get(base_url + "/wallets?user_id=" + id)
  .then((res) => { 
    reload_wallets(res.data, wallets);
  });
}

updateWallets();

function reload_wallets(arr) {
  wallets.innerHTML = "";

  let wallet_color = 1

  for (let item of arr) {
    let div = document.createElement("div");
    let visa = document.createElement("p");
    let currency = document.createElement("span");

    div.classList.add("box");

    visa.innerHTML = item.type
    currency.innerHTML =  item.currency
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
}