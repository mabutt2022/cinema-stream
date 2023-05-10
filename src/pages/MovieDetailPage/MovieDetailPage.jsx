import { useLocation } from 'react-router-dom';
import YoutubeEmbed from '../../components/Video/YoutubeEmbed.jsx';
import TicketForm from '../../components/MovieDetail/TicketForm.jsx';
import './MovieDetailPage.css';

export default function MovieDetailPage({ user }) {

  const location = useLocation();
  const { data } = location.state;

  const { id, trailerLink, image, movie, year, description, genre, rating, length, movieDate, movieTime } = data

  return (
    <>    
        <div className='container cont-detail'>
          <div className='result'>
            <div className='info'>
              <img className='poster' src={image} alt={movie} />
              <div>
                <h2 className='h2-moviedetail'>{movie}</h2>
                <div className='rating'>
                  <img className='img-moviedetail' src="https://dl.dropbox.com/s/c0olu3aadxcm3p7/star-icon.svg?raw=1" alt='star'></img>
                  <h4 className='h4-moviedetail'>{rating}</h4>
                </div>
                <div className='details'>
                  <span>{year}</span>
                  <span>{length}</span>
                </div>
                <div className='genre'>
                  <div className='inner-genre'>{genre}</div>
                </div>
              </div>
            </div>
          </div>
          <h3 className='h3-moviedetail'>Plot:</h3>
          <p>{description}</p>
          <br />
          <YoutubeEmbed embedId={trailerLink} />
        <div>
          <TicketForm movie={movie} movieId={id} movieDate={movieDate} movieTime={movieTime} user={user} />
        </div>
        </div>
      {/*  */}

    </>
  );
}