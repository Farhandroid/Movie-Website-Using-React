import React , {Component} from 'react';
import './Home.css';
import { API_URL , API_KEY , IMAGE_BASE_URL , BACKDROP_SIZE , POSTER_SIZE } from "../config";
import HeroImage from '../components/elements/HeroImage/HeroImage';
import SearchBar from '../components/elements/SearchBar/SearchBar';
import FourColGrid from '../components/elements/FourColGrid/FourColGrid';
import LoadMoreBtn from '../components/elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../components/elements/Spinner/Spinner';
import MovieThumb from '../components/elements/MovieThumb/MovieThumb';

class Home extends Component
{
    state= {
        movies: [],
        heroImage:null,
        loading: false,
        currentPage: 0,
        totalPage: 0,
        searchTerm: ''
    }

    componentDidMount(){
        this.setState({
            loading: true,
        })
        const endpoint =`${API_URL}movie/popular?api_key=${API_KEY}&language=jp-JP&region=JP&Page=1`
        this.fetchItems(endpoint);
    }

    searchItems = (searchTerm) =>
    {
        let endpoint=''
        this.setState(
            {
                movies: [],
                loading: true,
                searchTerm    //Since both parameter's name are same so we dont need to set searchTerm
            }
        )

        if (searchTerm==='') {
            endpoint =`${API_URL}movie/popular?api_key=${API_KEY}&language=jp-JP&region=JP&Page=1`;
        }
        else{
            endpoint=`${API_URL}search/movie?api_key=${API_KEY}&language=jp-JP&query=${searchTerm}`;
        }

        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) =>{
        fetch(endpoint)
        .then(result=>result.json())
        .then(result=>{
           this.setState(
               {
                movies: [...this.state.movies,...result.results],//ES6 spread syntax . It appends old movies data with new results. results are an object of result . Which we are getting from api .
                heroImage: this.state.heroImage || result.results[0],//This will check herImmage . If heroImage is null it will be replaced by first image.
                loading: false,                                      //heroimage is an json array
                currentPage: result.page,
                totalPage: result.total_pages
            } 
           )
        })
        .catch(error=>console.error('Error: ',error))
    }

    loadMore= () =>
    {
        let endpoint= ' ';

        if (this.state.searchTerm==='') {
            endpoint= `${API_URL}movie/popular?api_key=${API_KEY}&language=jp-JP&region=JP&Page=${this.state.currentPage+1}`;
        }else{
            endpoint= `${API_URL}search/movie?api_key=${API_KEY}&query${this.state.searchTerm}&language=jp-JP&region=JP&Page=${this.state.currentPage+1}`;
        }

        this.fetchItems(endpoint);

    }

    render() {
        return (
             <div className="rmdb-home">
                 {this.state.heroImage ?        //Ternery operator checking if heroImage is null or not.
                    <div>
                        <HeroImage 
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                            title={this.state.heroImage.original_title}
                            text={this.state.heroImage.overview}
                        />
                        <SearchBar />

                    </div>
                 : null}
                 <FourColGrid />
                 <Spinner />
                 <LoadMoreBtn />
                 
             </div>
        );
    }

}

export default Home;
