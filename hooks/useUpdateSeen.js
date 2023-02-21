import { db } from "../firebase";

export const useUpdateSeen = async (chatId, uid) => {
    try {
        const chatRef = await db.collection("chats").doc(chatId);
        return await chatRef.collection("messages")
            .where('userCreate', '!=', uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(({ ref }) => {
                    ref.update({
                        seen: true
                    });
                });
            });
    } catch (error) {
        throw error
    }
}
