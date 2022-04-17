import MessageList from "../components/MessageList";
import ControlPanel from "../components/ControlPanel";

import ChatList from "../components/ChatList";

const Chats = () => {
  return (
    <div className="wrapper">
      <ChatList />
      <div className="wrapper-child">
        <MessageList />
        <ControlPanel />
      </div>
    </div>
  );
};
export default Chats;
