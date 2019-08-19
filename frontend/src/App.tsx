import React from "react";

import "@arcanis-inc/tachyons";
import "./App.css";
import { isSessionValid, setSession, clearSession, getAuthHeaders } from "./session";
import ItemsContainer from "./Item/itemsContainer";

const App = () => {
  return (
    <div>
      <ItemsContainer />
    </div>
  );
};

export default App;
