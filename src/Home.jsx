import './styles.css';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';




function Home(props) {
   
let [loading ,setloading]= useState(true);
let[movies , setMovie]=useState([]);
const dataURL='https://api.themoviedb.org/3/movie/popular?api_key=10e0492bab76c16310666ae707a063c8&language=en-US&page=2';



async function getData(){
    let response = await fetch(dataURL);
    let data= await response.json();
   
    console.log(data);
   setMovie(data.results);
   setloading(true);
}

useEffect(()=>{
    getData();
},[]);





    return (
        <div className='container' >
            {
                loading &&(<h3>Loading...</h3>)
            }
            <div className='movie-container'>
              {
               movies.map((movie)=>{
               
                return(<MovieCard  movieId={movie.id}   movieName={movie.title}  poster={movie.poster_path}  
                         
                     voteAverage={movie.vote_average}  movieOverview={movie.overview} >
                       
                      
                     </MovieCard>)


               })

              } 
                
            </div>
            

        </div>
    )


}
export default Home;