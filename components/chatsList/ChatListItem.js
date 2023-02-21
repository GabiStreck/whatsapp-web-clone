import { Avatar, Divider, ListItem, ListItemAvatar } from "@material-ui/core";
import { useRelativeFromatOfDay } from "../../hooks/useRelativeFormatOfDay";
import {
  ContainerItemData,
  BadgeNewMessage,
  RowItem,
  UserItemData,
  LastMessageItem,
  DoneAllIconStyle,
  ContainerTime,
  MessageStyle
} from './style-components'

export default function ChatListItem({
  user,
  lastMessage,
  showSeen,
  UnReadMessage,
  action = () => { }
}) {
  if (!user) return null;
  const dateFormated = useRelativeFromatOfDay(lastMessage?.timestamp);
  return (
    <>
      <ListItem button onClick={action}>
        <ListItemAvatar>
          <Avatar
            src={user?.photoURL ? user?.photoURL : null}
            sx={{ height: 49, width: 49 }}
          />
        </ListItemAvatar>
        <ContainerItemData>
          <RowItem>
            <UserItemData>
              <span title={user?.fullName ?? user?.email}>
                {user?.fullName ?? user.email}
              </span>
            </UserItemData>
            <ContainerTime>
              {dateFormated}
            </ContainerTime>
          </RowItem>
          <RowItem>
            {lastMessage ? (
              <LastMessageItem>
                {showSeen ? (
                  <DoneAllIconStyle
                    fontSize="small"
                    visible={lastMessage?.seen ? "#53bdeb" : "default"}
                  />
                ) : null}
                <MessageStyle>{lastMessage?.message}</MessageStyle>
              </LastMessageItem>
            ) : null}

            {UnReadMessage > 0 && !showSeen &&
              <BadgeNewMessage>
                {UnReadMessage}
              </BadgeNewMessage>}
          </RowItem>
        </ContainerItemData>
      </ListItem>
      <Divider component="li" variant="inset" />
    </>
  );
}
