import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../hooks/AuthProvider";

const Login = () => {
  let navigate = useNavigate();

  let location = useLocation();

  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await auth.signin({ email, password }, () => {
        setTimeout(() => navigate(from, { replace: true }), 2000);
      });
    } catch (e) {
      toast.error("Ошибка!");
      setError(e);
      console.error(e);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Логин</h1>
        <p>Введите почту и пароль для авторизации</p>
        <div>
          <TextField
            placeholder="Введите ваш email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="text-field">
          <TextField
            placeholder="Введите ваш пароль"
            name="password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        {error && <p>{error}</p>}
        <Button variant="outlined" type="submit" color="success">
          Войти
        </Button>
      </form>
    </div>
  );
};
export default Login;
