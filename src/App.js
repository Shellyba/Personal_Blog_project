// import './App.css';

import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";



export function App() {

    return (

        <div className="page">
            {/*<ScrollRestoration />*/}
            <Header/>
            <Outlet />
            <Footer />
        </div>
  );
}

