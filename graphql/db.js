let movies = [
    {
        id: "0",
        name: "Nicolas",
        age: 18,
        gender: "female",
        score: 99
    },
    {
        id: "1",
        name: "Jisu",
        age: 18,
        gender: "female",
        score: 98
    },
    {
        id: "2",
        name: "Japan Guy",
        age: 18,
        gender: "male",
        score: 97
    },
    {
        id: "3",
        name: "Daal",
        age: 18,
        gender: "male",
        score: 96
    },
    {
        id: "4",
        name: "mondaddi",
        age: 18,
        gender: "male",
        score: 95
    },
    {
        id: "5",
        name: "JD",
        age: 18,
        gender: "male",
        score: 94
    },
    {
        id: "6",
        name: "jayoung",
        age: 18,
        gender: "female",
        score: 93
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredPeople = people.filter(peron => person.id === id);
    return filteredPeole[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length ){
        movie = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};