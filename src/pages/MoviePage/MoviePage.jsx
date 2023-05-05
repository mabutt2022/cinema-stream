import { Link } from 'react-router-dom';
// import { getMovies } from '../../utilities/services/movies';
import { useState, useEffect } from 'react';

import * as moviesAPI from '../../utilities/api/movies.js'

export default function MoviePage({ setMovieById }) {

  const [movies, setMovies] = useState([]);

  async function handleMovieById(id) {
    await setMovieById(id)
  }


  useEffect(() => {

    async function getMovies() {
      const movies = await moviesAPI.moviesList();
      setMovies(movies);
    }
    getMovies();

  }, []);



  return (
    <section className='movieList'>
      <h2>Movie Page</h2>

      {movies.map((movie) => (
        <Link to={'/movie/detail'} key={movie.id} state={{ data: movie }}>
          <div key={movie.id}
            onClick={async () => {
              await handleMovieById(movie.id)

            }}>
            <img className='movieImage' src={movie.image} alt={movie.movie} />
          </div>
          <div>
            {movie.movie}
          </div>
          <br />
        </Link>
      )
      )}

    </section>
  );
}