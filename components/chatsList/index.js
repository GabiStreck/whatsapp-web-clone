
import { useAuthState } from "react-firebase-hooks/auth";
import { Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import { useRouter } from "next/router";
import { auth } from "../../firebase";
import ChatListItem from "./ChatListItem";
import { ListContainer } from "./style-components";

export default function ChatsList({ chats }) {
  const router = useRouter();
  const [userAuth] = useAuthState(auth);
  return (
    <ListContainer>
      <Divider />
      <List disablePadding>
        {chats?.map((item) => (
          <ChatListItem
            UnReadMessage={item.UnReadMessage}
            action={() => router.push(`/chat/${item.id}`)}
            id={item.id}
            key={item.id}
            lastMessage={item.lastMessage}
            showSeen={item.lastMessage?.userCreate == userAuth.uid}
            user={item.user}
          />
        ))}
      </List>
    </ListContainer>
  );
}
