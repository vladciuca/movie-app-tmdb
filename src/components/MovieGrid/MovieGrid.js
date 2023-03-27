import React from "react";
import { MovieCard, Pagination } from "components";
import { Grid, PaginationContainer } from "./MovieGrid.styles";

const MovieGrid = ({ movies, displayFavorites }) => {
  return (
    <>
      <Grid>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.title}
              release={movie.release_date}
              thumbnail={movie.poster_path}
            />
          );
        })}
      </Grid>
      {!displayFavorites && (
        <PaginationContainer>
          <Pagination />
        </PaginationContainer>
      )}
    </>
  );
};
export default MovieGrid;
