import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as moviesAPI from '../../utilities/api/movies.js'
import YoutubeEmbed from '../../components/Video/YoutubeEmbed.jsx';
export default function MovieDetailPage() {



  const location = useLocation();
  const { data } = location.state;





  const { trailerLink, image, movie, year, description, genre, rating, length, movieDate, movieTime } = data

  return (
    <body>
      <YoutubeEmbed embedId={trailerLink} />     
    
    <section className='movieList'>
      <h2>Movie Detail Page</h2>
      
      <div>
        <img className='movieImage' src={image} alt={movie} />
      </div>
      <div>
        {movie}
      </div>
      <div>
        {year}
      </div>
      <div>
        {description}
      </div>
      <div>
        {genre}
      </div>
      <div>
        {rating}
      </div>
      <div>
        {length}
      </div>
      <div>
        <select name="movieDate" id="">
          {movieDate.map((date) => (
            <option key={date.id} value={date.date}>{date.date.substring(0, 10)}</option>
          ))}
        </select>
      </div>
      <div>
        <select name="movieTime" id="">
          {movieTime.map((time) => (
            <option key={time.id} value={time.time}>{time.time}</option>
          ))}
        </select>
      </div>

    </section>
    </body>
  );
}