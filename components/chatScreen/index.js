import React, { useContext, useEffect, useMemo, useRef } from "react";
import firebase from "firebase";
import { useRouter } from "next/router";
import styled from "styled-components";

import { TYPE_MESSAGE } from "../../constants/typeMessage";
import { Context } from "../../context/ChatsProvider";
import { db } from "../../firebase";
import { useUpdateSeen } from "../../hooks/useUpdateSeen";
import { useUserAuth } from "../../hooks/useUserAuth";
import Messages from "../messages/";

import ChatInputBox from "./ChatInputBox";
import HeaderChat from "./HeaderChat";
import { renderMessages } from "./renderMessages";


export default function ChatScreen({ chat, messages }) {
  const { contacts } = chat;
  const { setChats: setChatsContext } = useContext(Context);
  const { user } = useUserAuth();
  const chatEndMensagesRef = useRef();
  const { query } = useRouter();

  useEffect(async () => {
    try {
      const lastMessage = JSON.parse(messages);

      if (user.uid != lastMessage[lastMessage.length - 1].userCreate) {
        await useUpdateSeen(chat.id, user.uid);
        setChatsContext((prev) => prev?.map((item) => {
          if (item.id == query.id) {
            return {
              ...item, UnReadMessage: 0,
              lastMessage: {
                ...item.lastMessage,
                seen: true
              }
            };
          }

          return item;
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      onScrollToBottom();
    }
  }, [messages, chat, user]);

  const contact = useMemo(() => {
    let cont = contacts?.find((item) => {
      if (item.userCreate == user.email) {
        return item;
      }
    });

    if (!cont) {
      cont = contacts[0];
      cont.fullName = cont.userCreate;
    }

    return cont;
  }, [contacts]);

  const onScrollToBottom = () => {
    chatEndMensagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const sendMessage = async (msg) => {
    try {
      await db.collection("users").doc(user.uid)
        .set(
          { lastSeen: firebase.firestore.FieldValue.serverTimestamp() },
          { merge: true }
        );

      const messageData = {
        message: msg,
        seen: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        typeMessage: TYPE_MESSAGE.TEXT,
        userCreate: user.uid
      };
      console.log(messageData);
      await db.collection("chats").doc(query.id)
        .collection("messages")
        .add(messageData);

      setChatsContext((prev) => prev.map((item) => {
        if (item.id == query.id) {
          return { ...item, lastMessage: messageData };
        }
        return item;
      }));

      return true;
    } catch (error) {
      return false;
    } finally {
      onScrollToBottom();
    }
  };

  return (
    <MainContainer>
      <HeaderChat contact={contact} />
      <Messages >
        {renderMessages(query.id, messages)}
        <span ref={chatEndMensagesRef} />
      </Messages>
      <ChatInputBox sendMensage={sendMessage} />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: background-color 0.3s ease;
`;
