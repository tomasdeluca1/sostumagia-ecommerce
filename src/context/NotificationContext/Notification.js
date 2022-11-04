import { createContext, useState, useContext } from "react";
import "./notifications.css";

const Notification = ({ msg, severity }) => {
  const color = severity === "success" ? "green" : "red";
  if (msg === "") return;

  return (
    <div className="notification" style={{ backgroundColor: color }}>
      {msg}
    </div>
  );
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const setNotification = (severity, msg) => {
    setSeverity(severity);
    setMessage(msg);

    setTimeout(() => {
      setMessage("");
    }, 5000);
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

export const useNotification = () => {
  return useContext(NotificationContext);
};
