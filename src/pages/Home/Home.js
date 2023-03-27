import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MovieGrid, SkeletonGrid, Error } from "components";
import { getMovies } from "store/movies/moviesActions";
import { getFavoriteMovies } from "store/favorites/favoritesActions";

const Home = ({
  displayMovies,
  displayFavorites,
  displayUpcoming,
  displaySearch,
  getMovies,
  getFavoriteMovies,
  favorites,
  movies,
  moviesPage,
  upcomingPage,
  isLoading,
  hasError,
  errorMessage,
  searchResults,
}) => {
  useEffect(() => {
    getMovies();
  }, [getMovies, moviesPage, upcomingPage, displayMovies, displayUpcoming]);

  useEffect(() => {
    getFavoriteMovies();
  }, [getFavoriteMovies, displayFavorites]);

  const movieList =
    displayMovies || displayUpcoming
      ? movies
      : displaySearch
      ? searchResults
      : favorites;
  const hasData = !!(!isLoading && movieList.length);
  const hasFavorites = favorites.length;

  return (
    <>
      {isLoading && <SkeletonGrid />}
      {!displayFavorites && hasError && <Error errorMessage={errorMessage} />}
      {!movieList.length && displaySearch && (
        <Error errorMessage={"No movies found..."} />
      )}
      {!hasFavorites && displayFavorites && (
        <Error errorMessage={"No Favorite Movies"} />
      )}
      {hasData && (
        <MovieGrid movies={movieList} displayFavorites={displayFavorites} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  displayMovies: state.categories.displayMovies,
  displayFavorites: state.categories.displayFavorites,
  displayUpcoming: state.categories.displayUpcoming,
  displaySearch: state.categories.displaySearch,
  favorites: state.favorites.favoriteMovieList,
  movies: state.movies.movieList,
  moviesPage: state.movies.moviesPage,
  upcomingPage: state.movies.upcomingPage,
  isLoading: state.movies.isLoading,
  hasError: state.movies.hasError,
  errorMessage: state.movies.errorMessage,
  searchResults: state.search.results,
});

const mapDispatchToProps = {
  getMovies,
  getFavoriteMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
