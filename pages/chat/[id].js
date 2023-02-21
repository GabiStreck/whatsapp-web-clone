import ChatScreen from "../../components/chatScreen";
import Scaffold from "../../components/scaffold/Scaffold";
import { useGetChat } from "../../hooks/useGetChat";

export default function ChatPage({ messages, chat }) {
  return (
    <Scaffold>
      <ChatScreen chat={chat} messages={messages} />
    </Scaffold>
  );
}

export async function getServerSideProps(context) {
  const { chat, messages } = await useGetChat(context.query.id);

  return {
    props: {
      chat,
      messages: JSON.stringify(messages)
    }
  };
}
