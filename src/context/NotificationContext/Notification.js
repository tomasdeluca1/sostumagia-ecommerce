import { createContext, useState, useContext } from "react";
import "./notifications.css";

const Notification = ({ msg, severity }) => {
  const color = severity === "success" ? "#23C552" : "#F84F31";
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
    }, 4000);
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
