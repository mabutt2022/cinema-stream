import * as moviesAPI from '../api/movies'

export async function getMovies() {
    const movies = await moviesAPI.moviesList();
    // console.log(movies);
    return movies
}