import {
  MOVIE_CATEGORY_FLAG,
  FAVORITES_CATEGORY_FLAG,
  UPCOMING_CATEGORY_FLAG,
  UPCOMING_SEARCH_FLAG,
} from "./categoriesReducer";

export const showMovies = () => (dispatch, getState) => {
  dispatch({ type: MOVIE_CATEGORY_FLAG });
};

export const showFavorites = () => (dispatch, getState) => {
  dispatch({ type: FAVORITES_CATEGORY_FLAG });
};

export const showUpcoming = () => (dispatch, getState) => {
  dispatch({ type: UPCOMING_CATEGORY_FLAG });
};

export const showSearch = () => (dispatch, getState) => {
  dispatch({ type: UPCOMING_SEARCH_FLAG });
};
