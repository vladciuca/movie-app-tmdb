import React from "react";
import { connect } from "react-redux";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { FavContainer } from "./FavoriteIcon.styles";
import { toggleFavoriteMovie } from "store/favorites/favoritesActions";

const FavoriteIcon = ({
  favoritesList,
  id,
  name,
  thumbnail,
  release,
  toggleFavoriteMovie,
}) => {
  return (
    <FavContainer
      onClick={() => toggleFavoriteMovie(id, name, release, thumbnail)}
    >
      {favoritesList[id] ? (
        <RiHeartFill size="1.3rem" color="#ff7b7b" />
      ) : (
        <RiHeartLine size="1.3rem" />
      )}
    </FavContainer>
  );
};

const mapStateToProps = (state) => ({
  favoritesList: state.favorites.favoritesList,
});

const mapDispatchToProps = {
  toggleFavoriteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIcon);
