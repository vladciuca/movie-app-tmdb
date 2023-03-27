import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import movies from "./movies/moviesReducer";
import favorites from "./favorites/favoritesReducer";
import categories from "./categories/categoriesReducer";
import search from "./search/searchReducer";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesList"],
};

const rootReducer = combineReducers({
  movies,
  favorites: persistReducer(favoritesPersistConfig, favorites),
  categories,
  search,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["movies", "upcoming"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

export default store;

export const persister = persistStore(store);
