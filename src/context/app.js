import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useParams from "../hooks/useParams";
const AppContext = createContext();
const useApp = () => useContext(AppContext);
const AppProvider = ({ children, value = { apps: [] } }) => {
  const { logout, client_id, redirect_uri, state } = useParams();
  const [data, setdata] = useState({ ...value });
  const mountRef = useRef();
  useEffect(() => {
    if (mountRef.current) {
      let temp = { ...data };
      if (
        data?.id_token &&
        client_id &&
        !data?.apps?.find((a) => a.client_id === client_id)
      ) {
        temp?.apps?.push({
          client_id,
          redirect: `${redirect_uri}?id_token=${data?.id_token}&state=${state}`,
        });
      }
      localStorage.setItem("auth", JSON.stringify(temp));
      setTimeout(() => {
        if (data?.id_token && client_id)
          window.location.href = data?.apps?.find(
            (a) => a.client_id === client_id
          )?.redirect;
      }, 500);
    } else {
      const data = JSON.parse(
        (!logout && localStorage.getItem("auth")) || "{}"
      );
      if (data?.eat > new Date().getTime()) setdata(data);
      else setdata({});
      mountRef.current = true;
    }
  }, [data]);

  return (
    <AppContext.Provider value={[data, setdata]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useApp };
