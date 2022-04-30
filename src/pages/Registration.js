import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import firebaseConfig from "../services/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(firebaseConfig);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Регистрция прошла успешно!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setEmail("");
      setPassword("");
    } catch (e) {
      toast.error("Ошибка");
      console.error(e);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form className="textFildies" onSubmit={onSubmit}>
        <h1>Регистрация</h1>
        <TextField
          placeholder="Введите Email"
          name="email"
          type="email"
          onChange={handleEmailChange}
          value={email}
          required
        />

        <TextField
          placeholder="Введите пароль"
          name="password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <div className="formButton">
          {error && <p>{error}</p>}
          <Button variant="outlined" color="success" type="submit">
            Зарегистрироваться
          </Button>
        </div>

        <p>
          Аккаунт уже есть? <Link to={"login"}>Войти</Link>
        </p>
      </form>
    </div>
  );
};
export default Registration;
//  1 08 40
