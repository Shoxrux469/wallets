let wallets = document.querySelector(".wallets");
let type = document.querySelector(".type");
let currency = document.querySelector(".currency");
let user_email = document.querySelectorAll(".user_email");
let close_add = document.querySelector(".close_add");
let add_button = document.querySelector(".add_button");
let add_wallet = document.querySelector(".add_wallet");
let form = document.forms.add_form;
let select = document.querySelector('select')
let base_url = "http://localhost:8080";
let id = location.search.split("=").at(1);
console.log(id);

const getSymbols = async () => {
  const res = JSON.parse(localStorage.getItem('symbols'))

  if(res) {
      return res
  }

  try {
      const res = await axios.get("https://api.apilayer.com/fixer/symbols", {
          headers: {
              apikey: import.meta.env.VITE_API_KEY
          }
      })
      
      localStorage.setItem('symbols', JSON.stringify(res.data.symbols))
      return res.data.symbols
  } catch(e) {
      console.log('Error: ', e);
  }
}
getSymbols()
  .then(res => {
    for(let key in res) {
      let option = new Option(`${key} - ${res[key]}`, key)

      select.append(option)
    }
  })

add_button.onclick = () => {
  add_wallet.classList.add("show", "fade");
};
close_add.onclick = () => {
  add_wallet.classList.remove("show", "fade");
};

function updateWallets() {
  axios.get(base_url + "/wallets?user_id=" + id)
  .then((res) => { 
    reload_wallets(res.data, wallets);
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

  let wallet = {
    user_id: id
  };

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    wallet[key] = value;
  });

  axios.post(base_url + "/wallets", wallet)
    .then((res) => {
    console.log(res, wallet);
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
  }
}
