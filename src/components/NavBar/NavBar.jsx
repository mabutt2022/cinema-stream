
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/services/users'

export default function NavBar({ user, setUser }) {
  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      <Link to="/account">Account</Link>
      &nbsp; &nbsp;
      <Link to="/">Home</Link>
      &nbsp; &nbsp; <span className="name">Hey there {user.name}!</span>
      &nbsp; &nbsp; <Link to="" onClick={handleLogOut}>Log Out</Link>

    </nav>
  );
}