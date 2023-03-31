import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
import { ImSearch } from "react-icons/im";
import { SearchContainer, SearchInput, SearchIcon } from "./Search.styles";
import { showSearch, showMovies } from "store/categories/categoriesActions";
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
  showMovies,
  searchCat,
}) => {
  const [query, setQuery] = useState(showSearch ? "" : "Search movies...");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const debouncedSearch = useCallback(
    debounce(() => {
      if (query.length > 0) {
        getSearchResults();
      }
    }, 500),
    [query]
  );

  useEffect(() => {
    if (query.length > 0) {
      debouncedSearch(query);
      handleSearchQuery(query);
      showSearch();
    } else {
      showMovies();
      handleSearchPage(1);
    }
  }, [query, debouncedSearch, showSearch]);

  useEffect(() => {
    if (!searchCat) {
      handleSearchQuery("");
      setQuery("");
    }
  }, [searchCat]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

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
  searchCat: state.categories.displaySearch,
});

const mapDispatchToProps = {
  getSearchResults,
  showSearch,
  showMovies,
  handleSearchQuery,
  handleSearchPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
