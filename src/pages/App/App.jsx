import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


// Components
import AuthPage from '../AuthPage/AuthPage';
import MoviePage from '../MoviePage/MoviePage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import AccountPage from '../AccountPage/AccountPage'
import NavBar from '../../components/NavBar/NavBar';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [runMovie, setRunMovie] = useState(false);

  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} setMovies={setMovies} search={search} setSearch={setSearch} setRunMovie={setRunMovie}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/movie" element={<MoviePage movies={movies} setMovies={setMovies} setSearch={setSearch} runMovie={runMovie}/>} />
              <Route path="/account" element={<AccountPage user={user}/>} />
              <Route path="/movie/detail" element={<MovieDetailPage user={user} />} />
              <Route path="/" element={<Navigate to ='/movie' />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
