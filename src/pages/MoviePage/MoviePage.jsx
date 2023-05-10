import { Link } from 'react-router-dom';
// import { getMovies } from '../../utilities/services/movies';
import { useEffect } from 'react';

import * as moviesAPI from '../../utilities/api/movies.js'

export default function MoviePage({ movies, setMovies, setSearch}) {


  // const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function getMovies() {
      const movies = await moviesAPI.moviesList();
      setSearch('')
      setMovies(movies);
    }
    return getMovies();

  }, [setMovies, setSearch]);



  return (
    <div className='container mt-5 cont-detail'>
      <div className='row' id='data-panel'>

        {movies.map((movie) => (
          <div key={movie.id} className='col-sm-3'>
              <div key={movie.id} className='card mb-2'
                onClick={() => {
                  setSearch('');
                }}
              >
                  <Link to={'/movie/detail'} key={movie.id} state={{ data: movie }}>
                <img className='card-img-top' src={movie.image} alt={movie.movie} />
            </Link>
                <div className='card-body movie-item-body'>
                  <h6 className='card-title'>{movie.movie}</h6>
                </div>
              </div>
          </div>
        )
        )}
      </div>


    </div>
  );
}