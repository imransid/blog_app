import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Nav from "./Nav";
import "./index.css";
import { store, persistor } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Nav />
    </PersistGate>
  </Provider>
);
