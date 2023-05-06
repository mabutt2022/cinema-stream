import { useLocation } from 'react-router-dom';
import YoutubeEmbed from '../../components/Video/YoutubeEmbed.jsx';
import TicketForm from '../../components/MovieDetail/TicketForm.jsx';


export default function MovieDetailPage( {user} ) {

  const location = useLocation();
  const { data } = location.state;

  const {id, trailerLink, image, movie, year, description, genre, rating, length, movieDate, movieTime } = data

  return (
    <div>
    
    <section className='movieList'>
      <h2>Movie Detail Page</h2>
      <YoutubeEmbed embedId={trailerLink} />     
      
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
      <TicketForm movie={movie} movieId={id} movieDate={movieDate} movieTime={movieTime} user={user}/>
      </div>
    </section>
    </div>
  );
}