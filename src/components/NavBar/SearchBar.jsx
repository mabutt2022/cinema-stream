import * as moviesAPI from '../../utilities/api/movies.js'
import { useNavigate, Navigate } from 'react-router-dom';
import MoviePage from '../../pages/MoviePage/MoviePage.jsx';
import '../../pages/MoviePage/MoviePage.css'

export default function SearchBar( {setMovies, search, setSearch, setRunMovie } ) {
    // const [search, setSearch] = useState('');
    let navigate = useNavigate();

    async function handleChange(evt) {
        setSearch(evt.target.value);
    }

    async function getMovies() {
        const movies = await moviesAPI.moviesList();
        setMovies(movies);
      }

    async function handleSubmit(evt) {
      if (evt.key === 'Enter') {
          evt.preventDefault();
        const searchResults = await moviesAPI.searchMovie(search);
        if (searchResults.length === 0) {
          alert('No results found. Please try again.');
          setSearch('');
          return <Navigate to ='/movie' />
        }
        setMovies(searchResults);
        if (searchResults.length !== 0) {
          setRunMovie(true);
          return navigate('/movie'); }
    }
  }

 


  return (
    <>
        <form className='form-inline my-2 my-lg-0' role='search' onKeyPress={handleSubmit}>
            <input className='form-control me-2' type="text" id="search" name="search" placeholder="Search for a movie..." 
            value={search}
            onChange={handleChange}/>
        </form>
    </>
  );
}