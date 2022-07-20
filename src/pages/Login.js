import React, { useState } from "react";
import axios from "axios";

function Login(postId) {
  const [userName, setUserName] = useState("");

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4000/users/`, {
      userName,
    });
    setUserName("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={userName}
            onChange={onChange}
            className="px-5 py-2 m-2"
          />
          <button className="btn-primary p-2">submit</button>
        </label>
      </form>
    </div>
  );
}

export default Login;
