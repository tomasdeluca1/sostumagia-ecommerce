import { createContext } from "react";

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
  return (
    <NotificationContext.Provider>{children}</NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
