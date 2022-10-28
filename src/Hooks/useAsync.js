import { useState, useEffect } from "react";
import { useNotification } from "../context/NotificationContext/Notification";

export const useAsync = (asyncFunction, dependencies = [], mensajeError) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const { setNotification } = useNotification();

  if (!Array.isArray(dependencies)) {
    dependencies = [];
  }

  useEffect(() => {
    asyncFunction()
      .then((response) => {
        setData(response);
      })
      .catch((reject) => {
        setError(reject);
        setNotification("fail", mensajeError);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies); //eslint-disable-line
  return {
    data,
    loading,
    error,
  };
};
