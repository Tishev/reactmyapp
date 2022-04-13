import "./App.css";
import React, { useState } from "react";
import Router from "./pages/Router";

export const MyThemeContext = React.createContext({ theme: "dark" });

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="App">
      <header className="App-header">
        <MyThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <Router />
        </MyThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
//38 53
