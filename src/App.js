import React, { useState } from "react";
import "./App.css";
import { signup_fetch, remove_fetch, edit_fetch, info_fetch } from "./util";

const App = () => {
  const [user, setUser] = useState();
  const [del, setDel] = useState()
  const [edit, setEdit] = useState()
  const [info, setInfo] = useState()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const signup_handler = async (e) => {
    e.preventDefault();
    const return_value = await signup_fetch(username, password);
    setUser(return_value.user_entry.username);
    console.log(return_value);
  }

  const remove_handler = async (e) => {
    e.preventDefault();
    const return_value = await remove_fetch(username);
    setDel(username);
    console.log(return_value);
  }

  const edit_handler = async (e) => {
    e.preventDefault();
    const return_value = await edit_fetch(username, password);
    setEdit(username);
    console.log(return_value);
  }

  const info_handler = async (e) => {
    e.preventDefault();
    const return_value = await info_fetch(username);
    setInfo(return_value);
    console.log(return_value);
  }

  return (
    <div className="App">
      <h2>Log In</h2>
      {user ? (<p>{user} has logged in</p>) : ("")}
      <form onSubmit={signup_handler}>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <input onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
          <button type="submit">Submit</button>
      </form>

      <br/>

      <h2>Remove</h2>
      {del ? (<p>{del} has been deleted</p>) : ("")}
      <form onSubmit={remove_handler}>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <button type="submit">Submit</button>
      </form>

      <br/>

      <h2>Edit</h2>
      {edit ? (<p>{edit} has been updated</p>) : ("")}
      <form onSubmit={edit_handler}>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <input onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
          <button type="submit">Submit</button>
      </form>

      <br/>

      <h2>info</h2>
      {info ? (<p>Username:{info.username}</p>) : ("")}
      {info ? (<p>Password:{info.password}</p>) : ("")}
      <form onSubmit={info_handler}>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;