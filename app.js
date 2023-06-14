'use strict'

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const peronalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};


for (let i = 0; i < 2; i++) {
	const	a = prompt("Один из нескольких просмотренных фильмов?", ""),
			b = prompt("На сколько оцените его?", "");

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			peronalMovieDB.movies[a] = b;
			console.log("Done");
		} else {
			console.log("error");
			i--;
		}
}


if (peronalMovieDB.count < 10) {
	console.log("Просмотренно довольно мало фильмов");
} else if (peronalMovieDB.count >= 10 && peronalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (peronalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}

console.log(peronalMovieDB);




