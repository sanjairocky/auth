import React from "react";

import { useApp } from "@/context/app";

const App = () => {
  const [data] = useApp();
  console.info(data);
  return (
    <div className="flex h-full align-items-center justify-content-center">
      auth website is up!
    </div>
  );
};

export default App;
