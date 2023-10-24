let email = document.querySelectorAll(".user_email");

let base_url = 'http://localhost:8080'
function updateData() {
  fetch(base_url + "/users")
    .then((res) => res.json())
    .then((res) => reload(res));
}

updateData();

email.forEach((email) => {
  email.innerHTML = item.email;
});

function reload(arr) {
    
    for(let item of arr) {
        let my_wallets = document.createElement('div')
        let h2 = document.createElement('h2')
        let div = document.createElement('div')
        let visa = document.createElement('p')
        let currency = document.createElement('span')
        let a = document.createElement('a')

        my_wallets.classList.add('my_wallets')
        h2.innerHTML = 'Мои кошельки'
        visa.innerHTML = 'Visa'
        currency.innerHTML = 'RUB'
        currency.classList.add('currency')
        a.innerHTML = 'Смотреть все кошельки'

        my_wallets.append(h2, div, a)
        div.append(visa, currency)
    }
}
