const initialState = {
  results: [],
  resultsPage: 1,
  query: "",
};

export const FETCH_RESULTS_SUCCESS = "FETCH_RESULTS_SUCCESS";
export const HANDLE_SEARCH_PAGE = "HANDLE_SEARCH_PAGE";
export const HANDLE_SEARCH_QUERY = "HANDLE_SEARCH_QUERY";

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        hasError: false,
      };
    case HANDLE_SEARCH_PAGE:
      return {
        ...state,
        resultsPage: action.payload,
      };
    case HANDLE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
}

export default searchReducer;
