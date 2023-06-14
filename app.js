const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const peronalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const   a = prompt("Один из нескольких просмотренных фильмов?", ""),
		b = prompt("На сколько оцените его?", ""),
		c = prompt("Один из нескольких просмотренных фильмов?", ""),
		d = prompt("На сколько оцените его?", "");

peronalMovieDB.movies[a] = b;
peronalMovieDB.movies[c] = d;

console.log(peronalMovieDB);

