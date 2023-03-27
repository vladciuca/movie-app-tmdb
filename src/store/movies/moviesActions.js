import axios from "axios";
import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FLUSH_MOVIES,
  HANDLE_MOVIES_PAGE,
  HANDLE_UPCOMING_PAGE,
} from "./moviesReducer";

export const handleMoviesPage = (page) => (dispatch, getState) => {
  const newPage = page;
  dispatch({ type: HANDLE_MOVIES_PAGE, payload: newPage });
};

export const handleUpcomingPage = (page) => (dispatch, getState) => {
  const newPage = page;
  dispatch({ type: HANDLE_UPCOMING_PAGE, payload: newPage });
};

export const getMovies = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_MOVIES_PENDING });
    const state = getState();
    const base = process.env.REACT_APP_ENDPOINT;
    const apiKey = process.env.REACT_APP_API_KEY;
    let category = "";
    let page = "";

    if (state.categories.displayFavorites || state.categories.displaySearch) {
      dispatch({
        type: FLUSH_MOVIES,
      });
      return;
    }
    if (state.categories.displayMovies) {
      category = "top_rated";
      page = state.movies.moviesPage;
    }
    if (state.categories.displayUpcoming) {
      category = "upcoming";
      page = state.movies.upcomingPage;
    }

    const { data } = await axios(
      `${base}/movie/${category}?api_key=${apiKey}&language=en-US&page=${page}`
    );
    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_ERROR, payload: error.message });
  }
};
