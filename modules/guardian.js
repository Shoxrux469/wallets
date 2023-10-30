const user = localStorage.getItem('users') || null

if(!user) {
    location.assign('/registr/registr.html')
}