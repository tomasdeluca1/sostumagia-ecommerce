import { createContext, useState } from "react";
import "./notifications.css";

const Notification = ({ msg, severity }) => {
  const notificationStyles = {
    position: "absolute",
    right: 10,
    top: 150,
    borderRadius: "1rem",
    padding: "10px 20px",
    color: "white",
  };

  if (msg === "") return;

  return (
    <div
      className={severity === "success" ? "success" : "fail"}
      style={notificationStyles}
    >
      {msg}
    </div>
  );
};

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const setNotification = (severity, msg) => {
    setSeverity(severity);
    setMessage(msg);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {" "}
      <Notification msg={message} severity={severity} />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
