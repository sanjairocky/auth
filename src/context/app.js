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
const AppProvider = ({ children, value = {} }) => {
  const { logout } = useParams();
  const [data, setdata] = useState({ ...value });
  const mountRef = useRef();
  useEffect(() => {
    if (mountRef.current) {
      localStorage.setItem("auth", JSON.stringify(data));
      setTimeout(() => {
        if (data?.id_token) window.location.href = data?.redirect;
      }, 500);
    } else {
      setdata(JSON.parse((!logout && localStorage.getItem("auth")) || "{}"));
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
