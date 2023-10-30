let section_h = document.querySelector("section");
let id = location.search.split("=").at(1);
let base_url = "http://localhost:8080";
let body = document.body

// console.log(id);
  fetch(base_url + "/users/" + id)
    .then((res) => res.json())
    .then((res) => {
      p.innerHTML = res.email
      main_page.href = `/?=${res.id}`
      my_wallets.href = `./add_wallets/add_wallets.html?=${res.id}`;
    });

  let header = document.createElement("header");
  let header_box = document.createElement('div')
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
  p.classList.add("user_email");
  header_box.classList.add('header_box')

  body.prepend(header_box);
  header_box.append(header);
  header.append(nav, div);
  nav.append(main_page, my_wallets, my_transactions);
  div.append(p, button);
  button.append(img);
