import { logDOM } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Message from "./components/Message";
import Count from "./components/Count";
import Button from "./components/Button";
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
      timerId = setInterval(() => {
        setList([...list, newMessage]);
      }, 1500);
      const newMessage = { text: "Привет, как дела?", author: AUTHOR.bot };
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [list]);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Cписок сообщений: </h4>
        <br />
        <br />
        {list.map((element) => (
          <div>
            <p>{element.text}</p>
            <sup>{element.author}</sup>
          </div>
        ))}

        <div>
          <input
            onChange={handleInput}
            value={value}
            type={"text"}
            placeholder={"Введите текст"}
          />
          <button onClick={handleClick}>Добавить сообщение</button>
        </div>
      </header>
    </div>
  );
}

export default App;
