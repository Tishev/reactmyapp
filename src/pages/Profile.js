import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible } from "../store/profile/actions";
import * as React from "react";

import Checkbox from "@mui/material/Checkbox";
const Profile = () => {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(changeVisible);
  }, [dispatch]);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={setShowName}>Show name</button>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <blockquote style={{ height: "40px" }}>
        {showName && <h3>{name}</h3>}
      </blockquote>
    </div>
  );
};

export default Profile;
