import { Link, Route, Routes } from "react-router-dom";
import Chats from "./Chats";
import Home from "./Home";
import Profile from "./Profile";
import { useState } from "react";
import { AUTHOR } from "../constants/common";

const initialChats = {
  id1: {
    name: "Chat 1",
    messages: [
      { text: "Message from chat1", author: AUTHOR.bot },
      { text: "Hi", author: AUTHOR.me },
    ],
  },
  id2: {
    name: "Chat 2",
    messages: [{ text: "Message from chat2", author: AUTHOR.me }],
  },
};

const Router = () => {
  const [chats] = useState(initialChats);

  return (
    <>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats/:chatId" element={<Chats />} />
        <Route path="*" element={<Chats chats={chats} />} />
      </Routes>
    </>
  );
};
export default Router;
