import React, { useState } from "react";
import "./App.css";

function App() {
  var [name, setName] = useState("");
  var [phone, setPhone] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !password) {
      setError("Please fill in all the fields");
      return;
    }

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Password: " + password);

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setError("");
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      {error && <p className="error">{error} </p>}
      <form onSubmit={handleSubmit}>
        <label className="input">Name</label>
        <input
          placeholder="Enter name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label className="input">Email</label>
        <input
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className="input">Phone</label>
        <input
          placeholder="Enter phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <label className="input">Password</label>
        <input
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;
