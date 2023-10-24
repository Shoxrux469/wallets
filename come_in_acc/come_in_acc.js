let from = document.querySelector("form");
let email_inp = document.querySelector(".email");
let password_inp = document.querySelector(".password");

let base_url = "http://localhost:8080";
function updateData() {
    fetch(base_url + "/users")
    .then((res) => res.json())
    .then((res) => reload(res));
}
updateData();

form.onsubmit = (e) => {
  e.preventDefault();
  let users = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    users[key] == value;
  });

  fetch(base_url + "/users", {
    method: "post",
    body: JSON.stringify(users),
    headers: {
      "Content-Type": "application/json",   
    },
  }).then((res) => {
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      updateData();
      form.reset();
      console.log(res)  ;
    }

});
};

function reload(arr) {
    
    for(let item of arr) {
        if(item.email === email_inp.value && item.password === password_inp.value) {
            document.location.href = "./index.html";
        } else {
            alert("Go Home Nigga");
        }
    }
}
    // if(users.email === email_inp.value && users.password === password_inp.value) {
    //     document.location.href = "./index.html";
    // } else {
    //     alert('go home nigga')
    // }
    
    // res.forEach((item) => {
    //   if (item.email === email_inp.value && item.password === password_inp.value) {
    //     document.location.href = "./index.html";
    //   } else {
    //     alert("Go Home Nigga");
    //   }
    // });