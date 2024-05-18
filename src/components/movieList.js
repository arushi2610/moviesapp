import React from 'react';

const MoviesList = (props) => {
const FavoriteComponent = props.FavoriteComponent;

const movies = props.movies || [];

    return (
        <>
            {movies.map((movie, index) => (
                movie && movie.Poster? (
                <div className='image-container d-flex justify-content-center w-25 mr-auto ml-auto px-3'>
                    <img src = {movie.Poster} alt="poster"></img>
                    <div onClick = {() => props.handleFavoritesClick(movie)} 
                    className='overlay d-flex align-items-center justify-content-center'>
                    <FavoriteComponent />  
                    </div>
                </div>
                ): null
            ))}
        </>
    );
};

export default MoviesList;