import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Yang diimport setelah install redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// Kalo namanya filenya index doang gaperlu kaya gini
// import reducers from './redux/reducers/index'
import reducers from "./redux/reducers/";
// Ini buat routernya gitu deh
import { BrowserRouter } from "react-router-dom";
// Setelah install cookie, si redux thunk ini baru kepake, redux thunk ini yang membantu kita memproses asynchronous message
import ReduxThunk from "redux-thunk";

// Create store gunanya untuk membuat 1 container yang isinya reducers
const penampung = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    {/* Provider memperbolehkan semua component yang dibungkus tag provider untuk mengakses store miliknya */}
    {/* store yang dikiri itu bawannya dari provider kaya udah ditentuin sama si provider */}
    <Provider store={penampung}>
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
