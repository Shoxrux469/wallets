let email = document.querySelectorAll(".user_email");
let wallets = document.querySelector(".wallets");
let type = document.querySelector(".type");
let currency = document.querySelector(".currency");
let user_email = document.querySelectorAll(".user_email");
let close_add = document.querySelector(".close_add");
let add_button = document.querySelector(".add_button");
let add_wallet = document.querySelector(".add_wallet");
let form = document.forms.add_form;
let base_url = "http://localhost:8080";
let id = location.search.split("=").at(1);
console.log(id);

add_button.onclick = () => {
  add_wallet.classList.add("show", "fade");
};
close_add.onclick = () => {
  add_wallet.classList.remove("show", "fade");
};
// updateUser();
function updateWallets() {
  axios.get(base_url + "/wallets").then((res) => {
    reload_wallets(res.data);
    // console.log(res);
    // user_email
  });
}

updateWallets();

function updateUser() {
  axios.get(base_url + "/users")
    .then((res) => {
    res.data.forEach((item) => {
      
      if (item.id == id) {

        user_email.forEach((user) => {
          user.innerHTML = item.email;
        });
      }
    });
  });
}

updateUser();

form.onsubmit = (e) => {
  e.preventDefault();

  let users = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    users[key] = value;
  });

  axios.post(base_url + "/wallets", users).then((res) => {
    console.log(res, users);
    if (res.status == 200 || res.status == 201) {
      // console.log(res);
      updateWallets();
      form.reset();
    }
  });
};

function reload_wallets(arr) {
  wallets.innerHTML = "";

  let wallet_color = 1;

  for (let item of arr) {
    let div = document.createElement("div");
    let visa = document.createElement("p");
    let currency = document.createElement("span");

    div.classList.add("box");

    visa.innerHTML = item.type;
    currency.innerHTML = item.currency;
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
    email.forEach((email) => {
      email.innerHTML = arr.email;
    });
  }
}
