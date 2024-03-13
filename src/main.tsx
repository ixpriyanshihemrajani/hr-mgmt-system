// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store, { persistor } from "./redux/Store";
import { PersistGate } from 'redux-persist/integration/react';

store.subscribe(() => console.log(store.getState()));

// Use ReactDOM.render instead of ReactDOM.createRoot.render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
