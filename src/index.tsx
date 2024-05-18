import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA5Y6JNXFtJRXK5PfM5gvHVe3vxpRF0rtk",
  authDomain: "react-js-91371.firebaseapp.com",
  projectId: "react-js-91371",
  storageBucket: "react-js-91371.appspot.com",
  messagingSenderId: "433381353324",
  appId: "1:433381353324:web:f1d8d256b7d416d4ca7549",
  measurementId: "G-LMWV7K0N58",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
