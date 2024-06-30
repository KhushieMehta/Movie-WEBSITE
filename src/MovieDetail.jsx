import { useEffect, useState } from 'react';
import MovieInfo from './MovieInfo';
import './MovieDetail.css';

export default function MovieDetail(props) {


    let movieId=props.match.params.id;
    console.log(" in MovieDetail   "+movieId);

    let [movie, setMovie] = useState([]);
    let [video, setVideo] = useState([]);
    let [genre, setGenre] = useState([]);
    

    const API_key = '10e0492bab76c16310666ae707a063c8';

    
    const REQUESTED_URL = 'https://api.themoviedb.org/3/movie/'+ movieId +'?api_key=' + API_key + '&append_to_response=videos';
    //const VIDEO_URL='http://api.themoviedb.org/3/movie/'+movieId +'/videos?api_key='+API_key;



    
    useEffect(() => {
      
  
        const fetchData = async () => {
             
            let response = await fetch(REQUESTED_URL);
            let data = await response.json();
       
           // console.log(" video VIDEO_URL  " + VIDEO_URL);
           // let responseVideo = await fetch(VIDEO_URL);
            ///let videoData = await responseVideo.json();        


            setGenre(data.genres)
            setMovie(data);
            setVideo(data.videos.results);
            console.log(video)
         
        };
    
        fetchData();
        // eslint-disable-next-line
      }, []);

      useEffect(()=>{
  
      },[movie])
    




      const renderkey = () =>
      video.map((item) => {      
        return (
          item.key
        );
      });
  





   
    const renderGenres = () =>
    genre.map((item) => {
      
      return (
        <div className='genre'> 
          {item.name}
        </div>
      );
    });

  
    return (
           
        <div className='container' >
             
         <MovieInfo
            movieName={movie.title} 
            backgroundImage={movie.backdrop_path}
            poster={movie.poster_path} 
            movieOverview={movie.overview}                 
           
            component={renderGenres()}  
            videokey={renderkey()}         
            >
         </MovieInfo>

         <div className="info-wrapper">
       
      
       {}
     </div>
         
          
        
         </div>
 


           
    )


}
