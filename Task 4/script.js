/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector('#output')

document.addEventListener('DOMContentLoaded', async (e) => {
    const response = await fetch(ENDPOINT)
    const json = await response.json()
    for (const item of json) {
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.innerText = item.brand
        li.appendChild(span)
        
        const modelUl = document.createElement('ul')
        for (const model of item.models) {
            const modelLi = document.createElement('li')
            modelLi.innerText = model
            modelUl.appendChild(modelLi)
        }
        li.appendChild(modelUl)
        ul.appendChild(li)
     
        output.appendChild(ul)   
    }
})