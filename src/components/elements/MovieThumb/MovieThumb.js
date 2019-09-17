import React from 'react';
import './MovieThumb.css'
import { Link } from "react-router-dom";

const MovieThumb = (props) =>
{
    return (
        <div className='rmdb-moviethumb'>
            {props.clickable ?
            <Link to={{ pathname: `${props.movieId}`, movieName: `${props.movieName}`}}>
                <img src={props.image} alt='Moviethumb'/>
            </Link>
            : <img src={props.image} alt='Moviethumb'/> }
        </div>
    );
}

export default MovieThumb;