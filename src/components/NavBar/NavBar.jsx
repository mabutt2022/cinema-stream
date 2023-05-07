
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/services/users'
import SearchBar from './SearchBar.jsx'

export default function NavBar({ user, setUser, setMovies, search, setSearch, setRunMovie }) {
  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      <SearchBar setMovies={setMovies} search={search} setSearch={setSearch} setRunMovie={setRunMovie}/>
      &nbsp; &nbsp;
      <Link to="/account">Account</Link>
      &nbsp; &nbsp;
      <Link to="/">Home</Link>
      &nbsp; &nbsp; <span className="name">Hey there {user.name}!</span>
      &nbsp; &nbsp; <Link to="" onClick={handleLogOut}>Log Out</Link>

    </nav>
  );
}