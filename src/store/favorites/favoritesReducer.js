const initialState = {
  favoritesList: {},
  favoriteMovieList: [],
};

export const TOGGLE_FAVORITE_MOVIE = "TOGGLE_FAVORITE_MOVIE";
export const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE_MOVIE:
      return {
        ...state,
        favoritesList: action.payload,
      };
    case FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteMovieList: action.payload,
        isLoading: false,
        hasError: false,
      };
    default:
      return state;
  }
}

export default favoritesReducer;
