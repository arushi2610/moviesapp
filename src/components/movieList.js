import React from 'react';

const MoviesList = (props) => {
const FavoriteComponent = props.FavoriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-center'>
                    <img src = {movie.Poster} alt="poster"></img>
                    <div onClick = {() => props.handleFavoritesClick()} 
                    className='overlay d-flex align-items-center justify-content-center'>
                    <FavoriteComponent 
                    
                    />
                        
                    </div>
                </div>
            ))}
        </>
    );
};

export default MoviesList;