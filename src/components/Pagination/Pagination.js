import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { PaginationContainer, Button, Page } from "./Pagination.styles";
import {
  handleMoviesPage,
  handleUpcomingPage,
} from "store/movies/moviesActions";
import { getSearchResults, handleSearchPage } from "store/search/searchActions";

export const Pagination = ({
  moviesPage,
  upcomingPage,
  searchPage,
  handleMoviesPage,
  handleUpcomingPage,
  handleSearchPage,
  displayMovies,
  displayUpcoming,
  displaySearch,
  isLoading,
  getSearchResults,
  movieList,
  // favoritesList,
  searchList,
}) => {
  const page = displayMovies
    ? moviesPage
    : displayUpcoming
    ? upcomingPage
    : displaySearch
    ? searchPage
    : 1;

  const list = displayMovies || displayUpcoming ? movieList : searchList;

  const nextPage = () => {
    if (isLoading) return;
    if (displayMovies) {
      const newPage = moviesPage ? moviesPage + 1 : moviesPage;
      handleMoviesPage(newPage);
    }
    if (displayUpcoming) {
      const newPage = upcomingPage ? upcomingPage + 1 : upcomingPage;
      handleUpcomingPage(newPage);
    }
    if (displaySearch) {
      const newPage = searchPage ? searchPage + 1 : searchPage;
      handleSearchPage(newPage);
      getSearchResults();
    }
  };

  const prevPage = () => {
    if (page === 1) return;
    if (displayMovies) {
      const newPage = moviesPage ? moviesPage - 1 : moviesPage;
      handleMoviesPage(newPage);
    }
    if (displayUpcoming) {
      const newPage = upcomingPage ? upcomingPage - 1 : upcomingPage;
      handleUpcomingPage(newPage);
    }
    if (displaySearch) {
      const newPage = searchPage ? searchPage - 1 : searchPage;
      handleSearchPage(newPage);
      getSearchResults();
    }
  };

  useEffect(() => {
    if (displayMovies) {
      handleMoviesPage(moviesPage);
    }
    if (displayUpcoming) {
      handleUpcomingPage(upcomingPage);
    }
  }, [displayMovies, displayUpcoming]);

  return (
    <PaginationContainer>
      {page === 1 ? (
        <Button disabled>
          <BsCaretLeftFill color="rgba(255,255,255, 0.4)" />
        </Button>
      ) : (
        <Button onClick={prevPage}>
          <BsCaretLeftFill />
        </Button>
      )}

      <Page>{page}</Page>

      {list.length !== 20 ? (
        <Button disabled>
          <BsCaretRightFill color="rgba(255,255,255, 0.4)" />
        </Button>
      ) : (
        <Button onClick={nextPage}>
          <BsCaretRightFill />
        </Button>
      )}
    </PaginationContainer>
  );
};

const mapStateToProps = (state) => ({
  moviesPage: state.movies.moviesPage,
  upcomingPage: state.movies.upcomingPage,
  searchPage: state.search.resultsPage,
  isLoading: state.movies.isLoading,
  displayMovies: state.categories.displayMovies,
  displayUpcoming: state.categories.displayUpcoming,
  displaySearch: state.categories.displaySearch,
  movieList: state.movies.movieList,
  // favoritesList: state.favorites.favoriteMovieList,
  searchList: state.search.results,
});

const mapDispatchToProps = {
  handleMoviesPage,
  handleUpcomingPage,
  getSearchResults,
  handleSearchPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
