import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { IconButton, List, ListItem } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import PersonAdd from "@material-ui/icons/PersonAdd";
import { useRouter } from "next/router";

import { auth, db } from "../../firebase";
import DrawerActions from "../core/DrawerAction";
import UserContact from "../core/UserContact";
import UserForm from "../profile/UserForm";

function UserListForNewMessage({ open, toggleDrawer }) {
  const [user] = useAuthState(auth);
  const [contacts, setContacts] = useState([]);
  const [openContact, setOpenContact] = useState(false);
  const router = useRouter();
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  const [chatsSnapshot] = useCollection(userChatRef);

  useEffect(() => {
    if (open) {
      (async () => {
        const userContactsRef = await db
          .collection("contacts")
          .where("userCreate", "==", `${user.email}`)
          .get();

        if (userContactsRef) {
          const myContacts = await userContactsRef?.docs.map((contact) => ({
            id: contact.id,
            ...contact.data()
          }));

          if (myContacts && myContacts.length > 0) {
            setContacts(myContacts);
          }
        }
      })();
    }
  }, [user.email, open]);

  const openContactForm = () => {
    setOpenContact(!openContact);
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const onAddContact = useCallback(async ({
    fullName = "",
    email,
    photoURL = null }) => {
    try {
      if (
        email &&
        email !== user.email
      ) {
        const photoUrlToB64 = photoURL ? await toBase64(photoURL) : null
        await db.collection("contacts").add({
          fullName,
          user: email,
          userCreate: user.email,
          photoURL: `${photoUrlToB64}`
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      toggleDrawer()
      openContactForm();
    }
  }, [user.email, openContactForm]);

  const onAddChat = useCallback(
    async (contact) => {
      const existChatByContact = await Promise.all([chatsSnapshot?.docs.find((chat) => chat.data().users.find((user) => user === contact.user))]);

      if (existChatByContact && existChatByContact?.length > 0 && existChatByContact[0] != undefined) {
        router.push(`/chat/${existChatByContact.id}`);
      } else {
        db.collection("chats")
          .add({ users: [user.email, contact.user] })
          .then((result) => {
            router.push(`/chat/${result.id}`);
          });
      }
      toggleDrawer();
      return null;
    },
    [user.email]
  );

  return (
    <>
      <IconButton onClick={() => toggleDrawer()}>
        <ChatIcon fontSize="small" />
      </IconButton>
      <DrawerActions
        BackdropProps={{ style: { position: "absolute" } }}
        ModalProps={{
          container: document.getElementById("drawer-container"),
          style: { position: "absolute" }
        }}
        PaperProps={{ style: { position: "absolute" } }}
        moreActions={
          <IconButton
            onClick={() => openContactForm()}
            style={{ color: "white" }}
          >
            <PersonAdd />
          </IconButton>
        }
        open={open}
        title="New Chat"
        toggleDrawer={toggleDrawer}
        variant="temporary"
      >
        <List>
          {contacts?.map((item) => (
            <ListItem button key={item.id} onClick={() => onAddChat(item)}>
              <UserContact name={item.fullName ? item.fullName : item.user} />
            </ListItem>
          ))}
        </List>
      </DrawerActions>

      <DrawerActions
        open={openContact}
        title="New Contact"
        toggleDrawer={openContactForm}
      >
        <UserForm onAddContact={onAddContact} />
      </DrawerActions>
    </>
  );
}

export default UserListForNewMessage;
