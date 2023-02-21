import { createContext, useState } from "react";

export const Context = createContext({})

export function ChatsProvider({ children }) {
    const [chats, setChats] = useState()
    return <Context.Provider value={{ chats, setChats }}>
        {children}
    </Context.Provider>
}
