import React from "react";
import { API_URL, API_KEY } from "../../config";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo  from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar  from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid  from "../elements/FourColGrid/FourColGrid";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";
import "./Movie.css";

class Movie extends React.Component {
  state = {
    movie: null,
    actors : null,
    directors: [],
    loading: false
  }

  componentDidMount(){
    this.setState({loading : true})
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=jp-JP&region=JP`
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) =>{
    fetch(endpoint)
    .then(result=>result.json())
    .then(result =>{
      console.log(result)
      if (result.status_code) {
        this.setState({loading: false});
      } else {
        this.setState({ movie: result }, () =>{  /*This is a callback function . After setting the movie data data next actor and director data will be loaded */
        const endpoint=`${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`

        fetch(endpoint)
        .then(result=>result.json())
        .then(result=> {
            const directors = result.crew.filter((member)=>member.job==="Director"); /*crew and job data are coming from api*/
            this.setState(
              {
                actors: result.cast,
                directors,
                loading: false
              })
            })
        })
      }
    })
    .catch(error => console.error('Error : ', error))
  }

  render() {
    return (
      <div className="rmdb-movie">
        <Navigation />
        <MovieInfo />
        <MovieInfoBar />

        <Spinner/>
      </div>
      
    )
  }
}

export default Movie;
