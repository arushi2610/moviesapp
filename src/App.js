import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MoviesList from './components/movieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/movieListsHeading';
import AddFavorites from './components/Addfavorites';
import RemoveFavorites from './components/RemoveFavorites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=20f07657`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    };
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favs')
  );

  setFavorites(movieFavorites || []);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favs', JSON.stringify(items));
  };

  const AddFavoriteMovies = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovies = (movie) => {
    const newFavoriteList = favorites.filter((favoriteMovie) => {
      return favoriteMovie?.imdbID !== movie.imdbID;
    });

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center ml-4 mt-4 mb-4'>
        <MovieListHeading heading = "Movies"/>
        <SearchBox searchValue={searchValue} 
        setSearchValue={setSearchValue} />
      </div>

      <div className="row">
      <MoviesList movies = {movies} 
      handleFavoritesClick = {AddFavoriteMovies} 
      FavoriteComponent = {AddFavorites} />
      </div>

      <div className='row d-flex align-items-center ml-4 mt-4 mb-4'>
        <MovieListHeading heading = "Favorites" />
      </div>

      <div className="row">
      <MoviesList movies = {favorites} 
      handleFavoritesClick = {removeFavoriteMovies} 
      FavoriteComponent = {RemoveFavorites} />
      </div>
    </div>
  );
};

export default App;
