import React from "react";
import { Grid, SkeletonThumbnail, SkeletonText } from "./SkeletonGrid.styles";

export const SkeletonGrid = () => {
  return (
    <Grid>
      {[...Array(4)].map((item, index) => (
        <div key={index}>
          <SkeletonThumbnail />
          <SkeletonText width="40%" height="15px" />
          <SkeletonText width="90%" height="20px" />
        </div>
      ))}
    </Grid>
  );
};

export default SkeletonGrid;
