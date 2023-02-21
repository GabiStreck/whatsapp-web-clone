import React from "react";
import styled from "styled-components";

import myImage from "../../assets/images/background.png";

export default function Messages({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  order: 2;
  background-image: url(${myImage});
  background-color: #ded6ce;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: auto;
`;
