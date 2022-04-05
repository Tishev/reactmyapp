import { logDOM } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Messages from "./components/Messages";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Send from "@mui/icons-material/Send";
import common, { AUTHOR } from "./constants/common";
import { element } from "prop-types";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (value !== "") {
      const newMessage = { text: value, author: AUTHOR.me };
      setList([...list, newMessage]);
    }
  };
  const handleInput = (event) => {
    setValue(event.target.value);
  };

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
    <div className="App">
      <header className="App-header">
        <h4>Cписок сообщений: </h4>
        <br />
        <br />
        <Messages messages={list} />

        <div>
          <TextField
            onChange={handleInput}
            value={value}
            placeholder={"Введите текст"}
            autoFocus
          />
          <Fab onClick={handleClick} color="primary" aria-label="add">
            <Send />
          </Fab>
        </div>
      </header>
    </div>
  );
}

export default App;
