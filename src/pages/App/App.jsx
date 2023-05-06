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

  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/movie" element={<MoviePage />} />
              <Route path="/account" element={<AccountPage user={user}/>} />
              <Route path="/movie/detail" element={<MovieDetailPage user={user}/>} />
              <Route path="/" element={<Navigate to ='/movie' />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
