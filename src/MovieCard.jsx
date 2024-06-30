
import { Link } from "react-router-dom";


const MovieCard = (props) => {
  
    console.log(props.movieInfo)
    return (

        <Link to={`/movie/${props.movieId}`}>

            <div className='movie-info image-container d-flex justify-content-star'>
                <img src={'http://image.tmdb.org/t/p/w500/' + props.poster} alt="" className='poster'></img>

                <div className='overlay d-flex align-items-center justify-content-center'>
                    <div className='info'>

                        <h4>{props.movieName} </h4>
                        <hr></hr>
                        <div className='overview'>  <div> {props.movieOverview} </div> <div className='vote'>  {props.voteAverage} </div></div>
                       

                    </div>
                </div>


            </div>

        </Link>
    );
};

export default MovieCard;