import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

function Layout() {
    return(
        <>
            
            <div className="main-container">
                <Header />
                <Outlet />
            </div>

            
            <Footer />
        </>
    )
}

export default Layout;