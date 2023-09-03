import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const AppContext = createContext();

const useApp = () => useContext(AppContext);

const AppProvider = ({ children, value = { apps: {} } }) => {
  const [data, setdata] = useState({
    ...value,
    ...JSON.parse(localStorage.getItem("auth")),
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(data || {}));
  }, [data]);

  return (
    <AppContext.Provider value={[data, setdata]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useApp };
