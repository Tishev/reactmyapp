import ChatList from "./ChatList";
import TextField from "@mui/material/TextField";
import Messages from "./Messages";

import Fab from "@mui/material/Fab";
import Send from "@mui/icons-material/Send";
import { useTheme } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { AUTHOR } from "../constants/common";

const ControlPanel = () => {
  const theme = useTheme();
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    if (value !== "") {
      const newMessage = { text: value, author: AUTHOR.me };
      setList([...list, newMessage]);
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
    if (list.length > 0 && list[list.length - 1].author !== AUTHOR.bot) {
      const newMessage = { text: "Привет, как дела?", author: AUTHOR.bot };
      timerId = setTimeout(() => {
        setList([...list, newMessage]);
      }, 1500);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [list]);
  return (
    <div>
      <h4>Cписок сообщений: </h4>
      <Messages messages={list} />

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
// 21 38
