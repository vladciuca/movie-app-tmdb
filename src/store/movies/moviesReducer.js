const initialState = {
  movieList: [],
  moviesPage: 1,
  upcomingPage: 1,
  isLoading: false,
  hasError: false,
  errorMessage: null,
};

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";
export const FLUSH_MOVIES = "FLUSH_MOVIES";
export const HANDLE_MOVIES_PAGE = "HANDLE_MOVIES_PAGE";
export const HANDLE_UPCOMING_PAGE = "HANDLE_UPCOMING_PAGE";

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movieList: action.payload,
        isLoading: false,
        hasError: false,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        hasError: true,
      };
    case HANDLE_MOVIES_PAGE:
      return {
        ...state,
        moviesPage: action.payload,
      };
    case HANDLE_UPCOMING_PAGE:
      return {
        ...state,
        upcomingPage: action.payload,
      };
    case FLUSH_MOVIES:
      return {
        ...state,
        movieList: [],
        isLoading: false,
        hasError: false,
      };
    default:
      return state;
  }
}

export default moviesReducer;
