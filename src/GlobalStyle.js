import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
}

body { 
  font-family: sans-serif;
  background-color:  ${(props) => props.theme.bgPrimary};
  background-image: radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,0.15) 0%, rgba(170,165,255,0.15) 46%, rgba(66,39,90,0.15) 100.2% );
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.text};
  overflow-x: hidden;
  margin: 0 15px;
  @media (min-width: 1000px) {
    margin: 0;
  }
}
::-webkit-scrollbar {
  width: 0.3rem;
  background: transparent;
}
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.bgPrimary};
}
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
}
`;
