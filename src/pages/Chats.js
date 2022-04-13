import MessageList from "../components/MessageList";
import ControlPanel from "../components/ControlPanel";
import { useParams } from "react-router-dom";

import ChatList from "../components/ChatList";

const Chats = ({ chats }) => {
  return (
    <div className="wrapper">
      <ChatList chats={chats} />
      <MessageList chats={chats} />
      <ControlPanel />
    </div>
  );
};
export default Chats;
// 1 54 09
