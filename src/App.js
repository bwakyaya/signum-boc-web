import "./App.css";
import React, { useState } from "react";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <div className="App">
        <Login setToken={setToken} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Dashboard token={token} />
      </div>
    );
  }
}

export default App;
