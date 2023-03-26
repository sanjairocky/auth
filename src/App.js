import React, { useRef, useState } from "react";

import { useApp } from "./context/app";
import useParams from "./hooks/useParams";
import Loader from "./components/Loader";

const loginUri =
  window.location.href +
  "?response_type=id_token&client_id=29352910282374239857&redirect_uri=https%3A%2F%2Fsanjairocky.github.io%2FmStore&scope=create+delete&state=xcoiv98y3md22vwsuye3kch";

const logoutUri = window.location.href + "?logout=true";

const App = () => {
  const [data, setdata] = useApp();
  const { response_type, redirect_uri, state, is_valid, logout, client_id } =
    useParams();
  const [loading, setLoading] = useState();
  const unameRef = useRef();
  const passRef = useRef();

  if (data?.id_token)
    return (
      <div
        className="d-flex flex-column p-4 border shadow"
        style={{ minWidth: "80%", minHeight: "50%" }}
      >
        <h4 className="d-flex align-items-center justify-content-center p-3 fs-1 fw-lighter">
          Applications
        </h4>
        <ul>
          {data.apps.map(({ client_id, redirect }) => (
            <li
              key={client_id}
              className="p-3 border m-2"
              onClick={() => (window.location.href = redirect)}
            >
              {client_id}
            </li>
          ))}
        </ul>
        <span className="py-2"></span>
        <button onClick={() => (window.location.href = logoutUri)}>
          Logout
        </button>
      </div>
    );

  if (is_valid && logout) return <div>Logged out successfully</div>;

  if (!is_valid)
    return (
      <div className="px-3">
        <p> All params are required</p>
        <p>
          For this example, the following parameters will be included in the
          request query parameters:
        </p>
        <ul>
          <li>client_id: myClientId</li>
          <li>redirect_uri: http://localhost:3030/client/app</li>
          <li>response_type: id_token</li>
          <li>scope: read</li>
          <li>state: myState</li>
        </ul>
        <a href={loginUri} target="_blank">
          click here
        </a>
      </div>
    );

  if (response_type !== "id_token")
    return <div>Application only supports id_token flow</div>;

  const handleLogin = (e) => {
    e.preventDefault();
    const username = unameRef?.current?.value;
    const password = passRef?.current?.value;
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

    setdata({
      id_token,
      username,
      iat,
      eat,
      apps: [
        {
          client_id,
          redirect: `${redirect_uri}?id_token=${id_token}&state=${state}`,
        },
      ],
    });
    // console.log(window.atob(id_token.split(".")[1]));
  };

  return (
    <>
      <div
        className="d-flex flex-column p-4 border shadow"
        style={{ minWidth: "80%", minHeight: "50%" }}
      >
        <h4 className="d-flex align-items-center justify-content-center p-3 fs-1 fw-lighter">
          Rocky Auth
        </h4>
        <div className="py-3 d-flex flex-1 flex-column align-items-center justify-content-center">
          <input
            className="form-control form-control-lg"
            ref={unameRef}
            type="text"
            placeholder="Username"
            name="username"
            required
            readOnly={loading}
          />
          <span className="py-3"></span>
          <input
            className="form-control form-control-lg"
            type="password"
            ref={passRef}
            placeholder="Password"
            name="password"
            required
            readOnly={loading}
          />
          <span className="py-3"></span>
          {loading ? (
            <Loader />
          ) : (
            <button
              type="submit"
              onClick={handleLogin}
              disabled={!is_valid || loading}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
