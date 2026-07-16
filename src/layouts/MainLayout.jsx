import { Outlet, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../App.css"

const MainLayout = () => {

    const {lang} = useParams();

    return (

        <div className="main-layout-wrapper">
            <Header lang = {lang} />
            <Outlet />  
            <Footer />
        </div>

    );
};

export default MainLayout