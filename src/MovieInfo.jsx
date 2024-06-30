const MovieInfo = (props) => {
   let key=props.videokey;
   console.log(" key  ..."+key)
  
   
  return (



    <div className='MovieDetail-container'

      style={{ backgroundImage: `url( ${'http://image.tmdb.org/t/p/w500/' + props.backgroundImage})` }}>

      <div class='Info-container'>
        <div class='Movie-poster'>
          <img src={'http://image.tmdb.org/t/p/w500/' + props.poster} alt="" className='poster'></img>
        </div>
        <div className='Movie-content'>
          <h1> {props.movieName}</h1>
          <div className='Movie-Overview'>
            <p>{props.movieOverview}</p>
          </div>
          <div className='mover-genres'>
           {props.component}


          </div>

          <button className ='move-trailer'> <a href ={'https://www.youtube.com/watch?v='+ props.videokey} className='link'> Watch Trailer ▶️ </a> </button>
        </div>
      </div>

    </div>






  );
};

export default MovieInfo;