import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert";
// @ts-ignore
import AlertTemplate from "react-alert-template-basic";
import { rootReducer } from "./services/reducers";
import reportWebVitals from "./reportWebVitals";
import { alertOptions } from "./alert";
import { App } from "./components/app";
import { initStore } from "./store";
import "./index.css";

const store = initStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
