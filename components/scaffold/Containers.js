import styled from "styled-components";

const ContainerMain = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (min-width: 1441px) {
    height: 96vh;
  }
`;

const ChatContainer = styled.div`
  width: 100%;
  background-color: #f0f2f5;
`;

const ContainerRoot = styled.div`
  font: inherit;
  font-size: 100%;
  vertical-align: initial;
  outline: none;
  padding: 0;
  margin: 0;
  border: 0;

  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (min-width: 1441px) {
    top: 19px;
    width: 1396px;
    height: calc(100% - 38px);
    margin: auto;
    &:after {
      background-color: #00a884;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 127px;
      content: "";
    }
  }
`;

export {
  ChatContainer,
  ContainerMain,
  ContainerRoot
};
