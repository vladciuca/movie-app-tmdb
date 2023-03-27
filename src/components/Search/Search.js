import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
import { ImSearch } from "react-icons/im";
import { SearchContainer, SearchInput, SearchIcon } from "./Search.styles";
import { showSearch } from "store/categories/categoriesActions";
import {
  getSearchResults,
  handleSearchQuery,
  handleSearchPage,
} from "store/search/searchActions";

const Search = ({
  getSearchResults,
  handleSearchQuery,
  handleSearchPage,
  showSearch,
  moviesCat,
  upcomingCat,
  favoritesCat,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const debouncedSearch = useCallback(
    debounce(() => {
      getSearchResults();
    }, 500),
    []
  );

  useEffect(() => {
    if (query && query.length > 0) {
      debouncedSearch(query);
      handleSearchQuery(query);
      showSearch();
    }
  }, [query, debouncedSearch, showSearch]);

  useEffect(() => {
    setQuery("");
    handleSearchQuery("");
  }, [upcomingCat, favoritesCat, moviesCat]);

  useEffect(() => {
    if (query === "") {
      handleSearchPage(1);
    }
  }, [query]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleInputChange}
      />
      <SearchIcon>
        <ImSearch size="1.4rem" />
      </SearchIcon>
    </SearchContainer>
  );
};

const mapStateToProps = (state) => ({
  moviesCat: state.categories.displayMovies,
  upcomingCat: state.categories.displayUpcoming,
  favoritesCat: state.categories.displayFavorites,
});

const mapDispatchToProps = {
  getSearchResults,
  showSearch,
  handleSearchQuery,
  handleSearchPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);