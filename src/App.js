import React, { useEffect, useRef, useState } from "react";

import { useApp } from "./context/app";
import useParams from "./hooks/useParams";
import Login from "./components/Login";
import Applications from "./components/Applications";
import Logout from "./components/Logout";

// const loginUri =
//   window.location.href +
//   "?response_type=id_token&client_id=29352910282374239857&redirect_uri=https%3A%2F%2Fsanjairocky.github.io%2FmStore&scope=create+delete&state=xcoiv98y3md22vwsuye3kch";

const App = () => {
  const [data, setdata] = useApp();
  const { response_type, redirect_uri, state, logout, client_id } = useParams();
  const [loading, setLoading] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = document?.getElementById("email")?.value;
    const password = document?.getElementById("password")?.value;
    console.log(username, password);
    if (!username || !password) return;
    setLoading(true);

    const iat = new Date().getTime();
    const eat = iat + 86400;
    const id_token = `${window.btoa(
      JSON.stringify({ typ: "JWT", alg: "HS256" })
    )}.${window.btoa(
      JSON.stringify({
        name: username,
        username,
        _id: "gvfdsjnvdsj",
        iat,
        eat,
      })
    )}.${window.btoa("gvfsdjknvsd")}`;

    setdata((data) => ({
      id_token,
      username,
      iat,
      eat,
      apps: {
        ...data?.apps,
        ...(client_id ? { [client_id]: redirect_uri } : {}),
      },
    }));
    setLoading(false);
    // console.log(window.atob(id_token.split(".")[1]));
  };

  useEffect(() => {
    if (client_id && redirect_uri && data?.id_token) {
      setdata((data) => ({
        ...data,
        apps: {
          ...data?.apps,
          [client_id]: redirect_uri,
        },
      }));
    }
  }, []);

  if (logout) return <Logout />;

  if (data?.id_token)
    return <Applications apps={data?.apps} client_id={client_id} />;

  if (client_id && response_type !== "id_token")
    return <div>Application only supports id_token flow</div>;

  return <Login handleLogin={handleLogin} loading={loading} />;
};

export default App;
