import React from 'react';

const FavoriteComponent = ({ movie }) => {
    return (
      <div className="favorite-image-container">
        {movie.Poster}? (
          <img src={movie.Poster} alt={movie.Title}></img>
        ) : (
          <p>No Poster Available</p>
        )
      </div>
    );
  };
  
  export default FavoriteComponent;