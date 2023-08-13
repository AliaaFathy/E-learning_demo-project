import React from "react";
import ReactDOM from "react-dom/client"
import './index.css'
import App from "./App";
import {EdugramProvider} from "./context/EdugramContext";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import {basicTheme} from "./theme/basicTheme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const el=document.getElementById('root')

const root=ReactDOM.createRoot(el)
root.render(

    <BrowserRouter>
     <EdugramProvider>
         <Provider store={store}>
             <ThemeProvider theme={basicTheme}>
      <App>
      </App>
             </ThemeProvider>
         </Provider>

     </EdugramProvider>
    </BrowserRouter>
            )