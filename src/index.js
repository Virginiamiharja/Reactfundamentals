import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Yang diimport setelah install redux
import { Provider } from "react-redux";
import { createStore } from "redux";
// Kalo namanya filenya index doang gaperlu kaya gini
// import reducers from './redux/reducers/index'
import reducers from "./redux/reducers/";
// Ini buat routernya gitu deh
import { BrowserRouter } from "react-router-dom";

// Create store gunanya untuk membuat 1 container yang isinya reducers
const store = createStore(reducers, {});

ReactDOM.render(
  <React.StrictMode>
    {/* Provider memperbolehkan semua component yang dibungkus tag provider untuk mengakses store miliknya */}
    <Provider store={store}>
      {/* Trs disini kasih tambahan browser router */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
