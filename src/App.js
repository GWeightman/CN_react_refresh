import React, { useState } from "react";
import "./App.css";
import { signup_fetch } from "./util";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const signup_handler = async (e) => {
    e.preventDefault()
    const return_value = await signup_fetch(username, password);
    console.log(return_value);
  }

  return (
    <div className="App">
      <h1>{user}</h1>
      {!user ? (
        <form onSubmit={signup_handler}>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <input onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>You are logged in</h2>
      )}
    </div>
  );
};

export default App;