const square = num => {
    return num * num;
}

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);

const add = (x, y) => x + y;

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 99
    }
]

const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)