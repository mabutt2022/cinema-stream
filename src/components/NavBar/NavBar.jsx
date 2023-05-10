
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/services/users'
import SearchBar from './SearchBar.jsx'
import '../../pages/MoviePage/MoviePage.css'
import logo from '../../assets/images/logo.png'

export default function NavBar({ user, setUser, setMovies, search, setSearch, setRunMovie }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary'>
      <Link className='navbar-brand' to="/"><img src={logo} alt="" width="50" height="50" className="d-inline-block align-top" /></Link>


      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className='container-fluid'>
        <SearchBar setMovies={setMovies} search={search} setSearch={setSearch} setRunMovie={setRunMovie} />
      </div>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to="/">Movies
              <span className="sr-only">(current)</span></Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/account">Account</Link>
          </li>
          <li className='nav-item' >
            <Link className='nav-link' to="" onClick={handleLogOut}>Log&nbsp;Out</Link>
          </li>
        </ul>
      </div>


    </nav>
  );
}