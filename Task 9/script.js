/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title
        this.director = director
        this.budget = budget
    }
    wasExpensive() {
        return this.budget > 100_000_000
    }
}

const movie = new Movie('Pirates of the Caribbean: Dead Man\'s Chest', 'Gore Verbinski', 963400000)
console.log(movie)
console.log(movie.wasExpensive())
