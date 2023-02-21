import DoneAllIcon from "@material-ui/icons/DoneAll";
import styled from "styled-components";

const ContainerItemData = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  min-width: 0;
`;

const BadgeNewMessage = styled.div`
  width: 20px;
  heigth: 20px;
  border-radius: 20px;
  background-color: #00a884;
  color: #ffffff;
  text-align: center;
  font-size: 11px;
  font-weigth: 700;
  line-height: 20px;
`;

const RowItem = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
  padding: 2px;
`;

const UserItemData = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  font-size: 17px;
  font-weight: 400;
  line-height: 21px;
`;

const LastMessageItem = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
  font-size: 14px;
  display: flex;
  flex-grow: 1;
`;

const DoneAllIconStyle = styled(DoneAllIcon)`
  color: ${(props) => (props.visible)};
  margin-right: 5px;
`;

const ContainerTime = styled.div`
  flex: none;
  max-width: 100%;
  font-size: 12px;
  line-height: 20px;
  color: gray;
`;

const MessageStyle = styled.div`
  color: gray;
`;


const ListContainer = styled.div`
  overflow: auto;
  max-height: calc(100vh - 120px);
`;

export {
  ContainerItemData,
  BadgeNewMessage,
  RowItem,
  UserItemData,
  LastMessageItem,
  DoneAllIconStyle,
  ContainerTime,
  MessageStyle,
  ListContainer
}