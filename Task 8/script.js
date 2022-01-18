/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.sum = (a, b) => a + b
    this.subtraction = (a, b) => a - b
    this.multiplication = (a, b) => a * b
    this.division = (a, b) => a / b
}
const calc = new Calculator()
console.log(calc.sum(1000, 500))
console.log(calc.subtraction(1000, 500))
console.log(calc.multiplication(1000, 500))
console.log(calc.division(1000, 500))