import {
    BrowserRouter as Router,
    Switch,
    Route
    
  } from "react-router-dom";

  import MovieDetail from './MovieDetail';
  import Home from './Home';
  
  
export default function Main(props){
   
    return(
        <Router>
            <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path={'/movie/:id'}component={MovieDetail} />
           
         
         
         
        </Switch>
        </Router>
    )
}