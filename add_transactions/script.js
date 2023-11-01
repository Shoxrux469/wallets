let user_email = document.querySelectorAll(".user_email");
let add_button = document.querySelector(".add_button");
let add_transactions = document.querySelector(".add_transactions");
let close_add = document.querySelector(".close_add");
let tbody = document.querySelector("tbody");
let base_url = "http://localhost:8080";
let form = document.forms.add_form;
let id = location.search.split("=").at(1);
console.log(id);

add_button.onclick = () => {
  add_transactions.classList.add("show", "fade");
};
close_add.onclick = () => {
  add_transactions.classList.remove("show", "fade");
};

function updateTransactions() {
  axios.get(base_url + "/transactions")
    .then((res) => {
    reload_transactions(res.data);
    // console.log(res);
    // user_email
  });
}

updateTransactions();

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

  axios.post(base_url + "/transactions", users).then((res) => {
    console.log(res, users);
    if (res.status == 200 || res.status == 201) {
      // console.log(res);
      updateTransactions();
      form.reset();
    }
  });
};

function reload_transactions(arr) {
    tbody.innerHTML = "";

    for (let item of arr) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
  
      td1.innerHTML = item.id
      td2.innerHTML = item.type
      td3.innerHTML = item.category
      td4.innerHTML = item.sum
      td5.innerHTML = new Date().toLocaleTimeString()


      tbody.append(tr)
      tr.append(td1, td2, td3, td4, td5)
    }
  }
  
//   console.log(new Date().toLocaleTimeString());