/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

btn.addEventListener('click', async (e) => {
    const response = await fetch(ENDPOINT)
    const users = await response.json()
    output.innerHTML = ''
    for (const user of users) {
        const html = `
        <div class='card'>
            <img src='${user.avatar_url}' />
            <h2>${user.login}</h2>
        </div>
        `
        output.innerHTML += html
    }
})