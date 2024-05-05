import React, { useState } from "react";

function EventPractice() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(`${username}: ${message}`);
    setUsername("");
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="User Name"
        value={username}
        onChange={onChangeUsername}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="message"
        placeholder="Type Something"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Confirm</button>
    </div>
  );
}

export default EventPractice;
