import React from "react";
import { connect } from "react-redux";
import Pagination from "components/Pagination";
import { HeaderContainer, Categories, Category } from "./Navigation.styles";
import {
  showMovies,
  showFavorites,
  showUpcoming,
} from "store/categories/categoriesActions";

export const Navigation = ({
  showMovies,
  showFavorites,
  showUpcoming,
  displayMovies,
  displayFavorites,
  displayUpcoming,
}) => {
  return (
    <HeaderContainer>
      <Categories>
        <Category active={displayMovies} onClick={showMovies}>
          Movies
        </Category>
        <Category active={displayUpcoming} onClick={showUpcoming}>
          Upcoming
        </Category>
        <Category active={displayFavorites} onClick={showFavorites}>
          Favorites
        </Category>
      </Categories>
      {!displayFavorites && <Pagination />}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  displayMovies: state.categories.displayMovies,
  displayFavorites: state.categories.displayFavorites,
  displayUpcoming: state.categories.displayUpcoming,
});
const mapDispatchToProps = {
  showMovies,
  showFavorites,
  showUpcoming,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
