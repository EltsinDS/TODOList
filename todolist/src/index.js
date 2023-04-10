import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function getStorageState() {
  return (
    JSON.parse(localStorage.getItem("todoList")) || {
      search: "",
      formOpened: false,
      lightTheme: true,
      actualList: "checked",
      nextIndex: 0,
      todoList: [],
    }
  );
}

function setStorageState(state) {
  localStorage.setItem(
    "todoList",
    JSON.stringify({
      ...state,
      search: "",
      formOpened: false,
      lightTheme: true,
      actualList: "checked",
    })
  );
}

const state = getStorageState();
root.render(
  <React.StrictMode>
    <App state={state} setStorageState={setStorageState} />
  </React.StrictMode>
);

reportWebVitals();
