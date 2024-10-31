// components/Notification.js
import React from "react";

const Notification = ({ message, onClose }) => {
  return (
    <div className={"notification"}>
      <p>{message}</p>
      <button onClick={onClose} className={"closeButton"}>
        X
      </button>
    </div>
  );
};

export default Notification;
