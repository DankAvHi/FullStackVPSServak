import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./stylesVars.module.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

ReactDOM.render(
     <React.StrictMode>
          <Provider store={store}>
               <App />
          </Provider>
     </React.StrictMode>,
     document.getElementById("root")
);

reportWebVitals();
