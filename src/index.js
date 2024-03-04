import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4-2UIu1Lgfng8Jj2gyvDx7py8SI1Vr2Q",
  authDomain: "todoapp-1ee76.firebaseapp.com",
  projectId: "todoapp-1ee76",
  storageBucket: "todoapp-1ee76.appspot.com",
  messagingSenderId: "300304197538",
  appId: "1:300304197538:web:608d7ed91cfb2e1022f4fb",
  measurementId: "G-G95GC2YRHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
