import { Link, Route, Routes } from "react-router-dom";
import Chats from "./Chats";
import Gists from "./Gists";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Registration from "./Registration";
import RequireAuth from "../hocs/RequireAuth";

const Router = () => {
  return (
    <>
      <ul className={"menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
        <li>
          <Link to="/gists">Gists</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/gists" element={<Gists />} />
          {/* <Route index path="/chats:chatId" element={<Chats />} /> */}
          <Route path="/chats/:chatId" element={<Chats />} />
        </Route>
        <Route path="*" element={<Chats />} />
      </Routes>
    </>
  );
};
export default Router;
