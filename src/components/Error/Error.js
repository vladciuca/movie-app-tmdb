import React from "react";
import { ErrorContainer, ErrorMessage } from "./Error.styles";

const Error = ({ errorMessage }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
