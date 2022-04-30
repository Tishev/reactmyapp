import "./App.css";
import React, { useState } from "react";
import Router from "./pages/Router";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./hooks/AuthProvider";

export const MyThemeContext = React.createContext({ theme: "dark" });

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="App">
      <header className="App-header">
        <MyThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </MyThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
