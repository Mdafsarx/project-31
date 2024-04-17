import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            {/* outlet depend on route location  */}
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;