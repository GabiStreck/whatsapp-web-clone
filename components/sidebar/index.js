import { useCallback, useContext, useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import { Context } from "../../context/ChatsProvider";
import useAllContactWithChat from "../../hooks/useAllContactWithChat";
import ChatsList from "../chatsList";
import UserListForNewMessage from "./UserListForNewMessage";
import { useUserAuth } from "../../hooks/useUserAuth";
import MenuSettingProfile from "../core/MenuSettingProfile";
import {
  Container,
  Header,
  IconsContainer,
  Search,
  SearchConteiner,
  SearchInput
} from "./style-components";


export default function SideBar() {
  const { user } = useUserAuth()
  const { chats, setChats } = useContext(Context);
  const [query, setQuery] = useState("");
  const [openContactList, setOpenContactList] = useState(false);

  useEffect(async () => {
    if (!chats) {
      const allChats = await useAllContactWithChat(user);
      setChats(allChats);
    }
  }, [chats, user, setChats]);

  const toggleDrawer = useCallback(() => {
    setOpenContactList((prevOpen) => !prevOpen);
  }, []);

  const getAllChats = () => {
    if (!query) return chats;
    return chats.filter((chat) => chat?.user?.fullName?.includes(query));
  };

  return (
    <ContainerSidebar id="siderbarID">
      <Header>
        <Avatar src={user.photoURL ? user.photoURL : null} />
        <IconsContainer>
          <UserListForNewMessage
            open={openContactList}
            toggleDrawer={toggleDrawer}
          />
          <MenuSettingProfile />
        </IconsContainer>
      </Header>
      <SearchConteiner>
        <Search>
          <SearchIcon fontSize="small" />
          <SearchInput
            onChange={({ target }) => setQuery(target.value)}
            placeholder="Search in chats"
            value={query}
          />
        </Search>
      </SearchConteiner>
      <ChatsList chats={getAllChats()} />
    </ContainerSidebar>
  );
}

const ContainerSidebar = styled(Container)`
  position: relative;
`;
