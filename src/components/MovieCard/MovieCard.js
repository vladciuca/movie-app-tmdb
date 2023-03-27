import React from "react";
import { BsImage } from "react-icons/bs";
import { FavoriteIcon } from "components";
import {
  ImageContainer,
  Image,
  Info,
  Title,
  Release,
  NoImage,
} from "./MovieCard.styles";

const MovieCard = ({ id, name, release, thumbnail }) => {
  return (
    <div>
      <ImageContainer>
        {thumbnail && (
          <Image
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${thumbnail}`}
          />
        )}
        {!thumbnail && (
          <NoImage>
            <BsImage size="5rem" color="#5b486a" />
          </NoImage>
        )}
        <FavoriteIcon
          id={id}
          name={name}
          release={release}
          thumbnail={thumbnail}
        />
      </ImageContainer>

      <Info>
        <Release>{release}</Release>
        <Title>{name}</Title>
      </Info>
    </div>
  );
};
export default MovieCard;
