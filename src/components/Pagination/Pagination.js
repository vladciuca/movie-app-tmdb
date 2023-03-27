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
}) => {
  const page = displayMovies
    ? moviesPage
    : displayUpcoming
    ? upcomingPage
    : displaySearch
    ? searchPage
    : 1;

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
      <Button onClick={prevPage}>
        <BsCaretLeftFill />
      </Button>
      <Page>{page}</Page>
      <Button onClick={nextPage}>
        <BsCaretRightFill />
      </Button>
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
});

const mapDispatchToProps = {
  handleMoviesPage,
  handleUpcomingPage,
  getSearchResults,
  handleSearchPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
