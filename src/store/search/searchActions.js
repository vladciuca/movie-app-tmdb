import axios from "axios";
import {
  FETCH_RESULTS_SUCCESS,
  HANDLE_SEARCH_PAGE,
  HANDLE_SEARCH_QUERY,
} from "./searchReducer";
import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_ERROR,
  FLUSH_MOVIES,
} from "../movies/moviesReducer";
// import { MOVIE_CATEGORY_FLAG } from "../categories/categoriesReducer";

export const handleSearchPage = (page) => (dispatch, getState) => {
  const newPage = page;
  dispatch({ type: HANDLE_SEARCH_PAGE, payload: newPage });
};

export const handleSearchQuery = (query) => (dispatch, getState) => {
  const newQuery = query;
  dispatch({ type: HANDLE_SEARCH_QUERY, payload: newQuery });
};

export const getSearchResults = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_MOVIES_PENDING });
    const state = getState();
    const page = state.search.resultsPage;
    const query = state.search.query;
    const base = process.env.REACT_APP_ENDPOINT;
    const apiKey = process.env.REACT_APP_API_KEY;

    if (query === "") {
      return;
      // dispatch({ type: MOVIE_CATEGORY_FLAG });
    } else {
      const { data } = await axios(
        `${base}/search/movie?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false&query=${query}`
      );

      dispatch({
        type: FETCH_RESULTS_SUCCESS,
        payload: data.results,
      });
      dispatch({
        type: FLUSH_MOVIES,
      });
    }
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_ERROR, payload: error.message });
  }
};
