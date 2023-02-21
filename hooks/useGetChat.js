import { db } from "../firebase";

export const useGetChat = async (chatId) => {
    if (!chatId) return;
    const chatRef = await db.collection("chats").doc(chatId);
    const messagesRef = await chatRef
        .collection("messages")
        .orderBy("timestamp", "asc")
        .get();

    const messages = messagesRef.docs
        .map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        .map((messages) => ({
            ...messages,
            timestamp: messages.timestamp.toDate().getTime(),
        }));

    const getChat = await chatRef.get();
    const userChat = getChat?.data();
    const contact = await db.collection("contacts")
        .where("user", "in", [`${userChat?.users[0]}`, `${userChat?.users[1]}`])
        .get()

    const contacts = contact?.docs.map(item => {
        return item.data()
    })

    const chat = {
        id: getChat.id,
        contacts: contacts,
        ...getChat.data()
    };

    return { chat, messages }
}