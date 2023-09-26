const API_URL = 'https://padlet.helpdocs.io';

const HTMLResponse = document.querySelector("#app")
const tpl;

fetch(`${API_URL}/users`)
.then((response) =>  response.json()
.then((users) => {
    const tpl = users.map(users =>`<li>${user.name} ${user.email}</li>`)
})
)  
