/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const output = document.querySelector("#output")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    output.innerText = ''
    const ol = document.createElement('ol')
    const kgInput = document.querySelector('#search')
    const multipliers = {'Svarai (lb)': 2.2046, 'Gramai (g)': 1000, 'Uncijos (oz)': 35.274}
    for (const [key, value] of Object.entries(multipliers)) {
        const li = document.createElement('li')
        li.innerText = `${key}: ${value * kgInput.value}`
        ol.appendChild(li)
    }
    output.appendChild(ol)
})