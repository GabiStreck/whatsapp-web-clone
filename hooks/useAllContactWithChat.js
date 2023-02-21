import { db } from "../firebase";

export async function getContact(userContactId) {
  const contact = await db
    .collection("contacts")
    .where("user", "==", `${userContactId}`)
    .get();

  return contact?.docs[0]?.data();
}

export async function getMessage(chatId) {
  const messagesRef = await db
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .orderBy("timestamp", "desc")
    .get();

  return messagesRef.docs
    ?.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages?.timestamp?.toDate()?.getTime(),
    }));
}

const useAllContactWithChat = async (user) => {
  let chats = []

  const chatRef = await db
    .collection("chats")
    .where("users", "array-contains", user.email)
    .get();

  const listChats = await Promise.all(
    chatRef.docs.map(async (chat) => {
      const contact = chat.data().users.find((item) => item != user.email);
      const [contactChat, messagesRef] = await Promise.all([
        getContact(contact),
        getMessage(chat.id),
      ]);

      if (!contactChat && messagesRef) {
        const userContact = chat.data().users.find((item) => item == user.email);
        contactChat = await getContact(userContact);
        if (contactChat) {
          contactChat.fullName = contactChat.userCreate;
        }
      }

      const countUnreadMessage = () => {
        if (!messagesRef?.length) return 0
        return messagesRef.filter(ele => !ele.seen).length
      }

      return {
        id: chat.id,
        user: contactChat,
        UnReadMessage: countUnreadMessage(),
        lastMessage: messagesRef ? messagesRef[0] : null
      };
    })
  );

  if (listChats && listChats.length > 0) {
    chats = listChats;
  }
  return chats;
};

export default useAllContactWithChat;
