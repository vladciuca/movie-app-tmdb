import {
  TOGGLE_FAVORITE_MOVIE,
  FETCH_FAVORITES_SUCCESS,
} from "./favoritesReducer";

export const toggleFavoriteMovie =
  (id, name, release, thumbnail) => (dispatch, getState) => {
    const state = getState();
    const favoritesList = state.favorites.favoritesList;
    if (favoritesList[id]) {
      delete favoritesList[id];
      const newFavoritesList = {
        ...favoritesList,
      };
      dispatch({ type: TOGGLE_FAVORITE_MOVIE, payload: newFavoritesList });
    } else {
      const newFavoritesList = {
        ...favoritesList,
        [id]: {
          id,
          title: name,
          release_date: release,
          poster_path: thumbnail,
        },
      };
      dispatch({ type: TOGGLE_FAVORITE_MOVIE, payload: newFavoritesList });
    }
  };

export const getFavoriteMovies = () => (dispatch, getState) => {
  const state = getState();
  const favoritesList = state.favorites.favoritesList;

  const mappedFavoritesList = Object.values(favoritesList).map((obj) => ({
    ...obj,
  }));

  dispatch({
    type: FETCH_FAVORITES_SUCCESS,
    payload: mappedFavoritesList,
  });
};
