import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible, updateName } from "../store/profile/actions";
import React from "react";

import { TextField, Button } from "@mui/material";
const Profile = () => {
  const { showName, name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(name);

  const setShowName = useCallback(() => {
    dispatch(changeVisible);
  }, [dispatch]);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const saveName = () => {
    dispatch(updateName(value));
  };
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={setShowName}>Show name</button>

      <blockquote style={{ height: "40px" }}>
        {showName && <h3>{name}</h3>}
      </blockquote>
      <TextField
        placeholder={"Введите ваше имя"}
        value={value}
        onChange={handleInput}
        label={name}
      />
      <Button onClick={saveName}>Сoхранить</Button>
    </div>
  );
};

export default Profile;
// 22 57
