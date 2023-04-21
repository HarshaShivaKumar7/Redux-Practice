import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMessage } from "./actions";
import store from "./store";

const App = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const [newMessage, setNewMessage] = useState("");

  const handleUpdate = () => {
    dispatch(updateMessage(newMessage));
    setNewMessage("");
  };

  return (
    <div>
      <h1>{message}</h1>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleUpdate}>Update message</button>
    </div>
  );
};

export default App;
