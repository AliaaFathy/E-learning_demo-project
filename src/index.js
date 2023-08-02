import './index.css';
import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import {EdugramProvider} from "./context/EdugramContext";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {Provider} from "react-redux";

const el=document.getElementById('root')

const root=ReactDOM.createRoot(el)
root.render(

    <BrowserRouter>
     <EdugramProvider>
         <Provider store={store}>
      <App>
      </App>
         </Provider>

     </EdugramProvider>
    </BrowserRouter>
            )