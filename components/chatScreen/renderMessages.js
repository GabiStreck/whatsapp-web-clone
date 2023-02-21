import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Message from "../messages/Message";

export const renderMessages = (chatId, messages) => {
    const [messagesSnapshot] = useCollection(db
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc"));

    if (messagesSnapshot) {
        return messagesSnapshot.docs.map((message) => (
            <Message
                key={message.id}
                message={{
                    ...message.data(),
                    timestamp: message.data().timestamp?.toDate().getTime()
                }}
                user={message.data().userCreate}
            />
        ));
    }
    if (messages) {
        console.log('renderMessages', chatId, JSON.parse(messages));
        return JSON.parse(messages).map((message) => (
            <Message key={message.id} message={message} user={message.userCreate} />
        ));
    }
};
