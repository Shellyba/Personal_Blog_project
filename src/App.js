import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Outlet} from "react-router-dom";


// The outlet component includes all blog's pages.
// The Header and Footer components will be shown in each page of the blog.

export function App() {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

