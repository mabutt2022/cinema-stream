import { Link } from 'react-router-dom';
import { getMovies } from '../../utilities/services/movies';
import { useState, useEffect } from 'react';
export default function MoviePage() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, []);



  return (
    <div className='movieList'>
      <h2>Movie Page</h2>

      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <div key={movie.id}>
            <img className='movieImage' src={movie.image} alt={movie.movie} />
          </div>
        </Link>
      )
      )}

    </div>
  );
}