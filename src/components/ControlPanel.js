import TextField from "@mui/material/TextField";
import Messages from "./Messages";

import Fab from "@mui/material/Fab";
import Send from "@mui/icons-material/Send";
import { useTheme } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { AUTHOR } from "../constants/common";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/messages/actions";
import { useParams } from "react-router-dom";

const ControlPanel = () => {
  let { chatId } = useParams();
  const theme = useTheme();
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const author = useSelector((state) => state.profile.name);
  const allMessages = useSelector((state) => state.messages.messageList);

  const messages = allMessages[chatId] || [];

  const handleClick = (e) => {
    e.preventDefault();
    if (value !== "") {
      const newMessage = { text: value, author };
      dispatch(addMessage(chatId, newMessage));
      setValue("");
      inputRef.current?.focus();
    }
  };
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    let timerId;
    if (
      messages?.lenght > 0 &&
      messages[messages.lenght - 1].author !== AUTHOR.bot
    ) {
      const newMessage = { text: "Привет, как дела?", author: AUTHOR.bot };
      timerId = setTimeout(() => {
        dispatch(addMessage(chatId, newMessage));
      }, 1500);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [list, chatId]);
  return (
    <div>
      <div className="controlPanel">
        <TextField
          inputRef={inputRef}
          onChange={handleInput}
          value={value}
          placeholder={"Введите текст"}
        />
        <Fab onClick={handleClick} color="primary" aria-label="add">
          <Send />
        </Fab>
      </div>
    </div>
  );
};
export default ControlPanel;
