import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "./redux/store";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
