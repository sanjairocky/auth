import React from "react";

import { useApp } from "./context/app";
import useParams from "./hooks/useParams";

const redirect = ({ redirect_uri, state }) => {
  window.location.href = `${redirect_uri}?id_token=${"vfsvfs"}&state=${state}`;
};

const App = () => {
  const [data] = useApp();
  const { response_type, client_id, redirect_uri, state, scope, is_valid } =
    useParams();

  if (is_valid && response_type !== "id_token")
    return <div>Application only supports id_token flow</div>;

  const handleLogin = () => {
    redirect({ redirect_uri, state });
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
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          <span className="py-3"></span>
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <span className="py-3"></span>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
