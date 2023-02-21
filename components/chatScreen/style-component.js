import styled from "styled-components";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import { IconButton, InputBase } from "@material-ui/core";
import { Header } from "../sidebar/style-components";

const Container = styled.footer`
  box-sizing: border-box;
  flex: none;
  order: 3;
  width: 100%;
`;

const Box = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconButtonStyled = styled(IconButton)`
  margin: 0px 10px !important;
`;

const ContainerIcon = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const AttachFileIconStyled = styled(AttachFileIcon)`
  transform: rotate(45deg);
`;

const ContainerMessage = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  padding-right: 20px;
`;

const InputBaseStyled = styled(InputBase)`
  width: 100%;
  position: relative;
`;

const EmojiButton = styled(IconButton)`
  padding: 0px !important;
`;

const InputContainer = styled.div`
  padding: 7px 12px 5px 20px;
  margin: 5px 10px;
  width: 100%;
  min-width: 300px;
  border-radius: 8px;
  background-color: white;
`;

const InputContainers = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const SendIconStyled = styled(SendIcon)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
  margin: 12px;
`;

const IconActions = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: background-color 0.3s ease;
`;

export {
  Container,
  Box,
  IconButtonStyled,
  ContainerIcon,
  AttachFileIconStyled,
  ContainerMessage,
  InputBaseStyled,
  EmojiButton,
  InputContainer,
  InputContainers,
  SendIconStyled,
  IconActions,
  MainContainer
}