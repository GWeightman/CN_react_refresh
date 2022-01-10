import React, { useState } from "react"
import './App.css';
import { Login } from "./components/login";

const App = () => {
  const [user, setUser] = useState()
  const [username, setUsername] = useState()
  const [arr, setArr] = useState(["Steve", "Gary", "Clive", "Harry"])

  const submit_handler = (e) => {
    e.preventDefault()
    setUsername(user)
  }

  return (
    <div className="App">
      <h1>{user}</h1>
      {username ? <h1>Welcome {username}</h1> : <h1>Please log in</h1>}
      {username && <h2>Success</h2>}
      <Login setter={setUser} handler={submit_handler} />
      {arr.map((item, i) => {
        return(
          <p key={i}>{item}</p>
        )
      })}
    </div>
  );
}

export default App;
