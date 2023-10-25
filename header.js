let section_h = document.querySelector("section");
let base_url_h = "http://localhost:8080";

function updateData() {
  fetch(base_url_h + "/users")
    .then((res) => res.json())
    .then((res) => reload(res));
}

updateData()

function reload(arr) {

  for(let item of arr) {
    let header = document.createElement("header");
    let nav = document.createElement("nav");
    let main_page = document.createElement("a");
    let my_wallets = document.createElement("a");
    let my_transactions = document.createElement("a");
    let div = document.createElement("div");
    let p = document.createElement("p");
    let button = document.createElement("button");
    let img = document.createElement("img");
  
    main_page.innerHTML = "Главная";
    my_wallets.innerHTML = "Мои кошельки";
    my_transactions.innerHTML = "Мои транзакции";
    img.src = "./imgs/log-out (1) 1.svg";
    p.classList.add('user_email')
    p.innerHTML = item.email
  
    section_h.append(header);
    header.append(nav, div);
    nav.append(main_page, my_wallets, my_transactions);
    div.append(p, button);
    button.append(img);
  }
}