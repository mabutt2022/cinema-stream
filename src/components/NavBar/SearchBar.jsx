import * as moviesAPI from '../../utilities/api/movies.js'
import { useNavigate, Navigate } from 'react-router-dom';
import MoviePage from '../../pages/MoviePage/MoviePage.jsx';

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

    async function handleClear(evt) {
        evt.preventDefault();
        setSearch('');
        setRunMovie(false);
        getMovies();
        // ref.current.value='';
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="search" name="search" placeholder="Search for a movie..." 
            value={search}
            onChange={handleChange}/>
            {search ? 
            <button
            onClick={handleClear}
            >X</button> 
            : null}
            <input type="submit" value="Search"></input>
        </form>
    </>
  );
}