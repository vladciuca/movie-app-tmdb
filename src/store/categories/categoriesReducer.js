const initialState = {
  displayMovies: true,
  displayFavorites: false,
  displayUpcoming: false,
  displaySearch: false,
};

export const MOVIE_CATEGORY_FLAG = "MOVIE_CATEGORY_FLAG";
export const FAVORITES_CATEGORY_FLAG = "FAVORITES_CATEGORY_FLAG";
export const UPCOMING_CATEGORY_FLAG = "UPCOMING_CATEGORY_FLAG";
export const UPCOMING_SEARCH_FLAG = "UPCOMING_SEARCH_FLAG";

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_CATEGORY_FLAG:
      return {
        ...state,
        displayMovies: true,
        displayFavorites: false,
        displayUpcoming: false,
        displaySearch: false,
      };
    case FAVORITES_CATEGORY_FLAG:
      return {
        ...state,
        displayMovies: false,
        displayFavorites: true,
        displayUpcoming: false,
        displaySearch: false,
      };
    case UPCOMING_CATEGORY_FLAG:
      return {
        ...state,
        displayMovies: false,
        displayFavorites: false,
        displayUpcoming: true,
        displaySearch: false,
      };
    case UPCOMING_SEARCH_FLAG:
      return {
        ...state,
        displayMovies: false,
        displayFavorites: false,
        displayUpcoming: false,
        displaySearch: true,
      };
    default:
      return state;
  }
}

export default categoriesReducer;
