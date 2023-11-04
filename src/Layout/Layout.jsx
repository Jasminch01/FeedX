import { Outlet } from "react-router-dom";
import MainLayout from "./mainLayout";



const Layout = () => {
    return (
        <MainLayout>
            <Outlet></Outlet>
        </MainLayout>
    );
};

export default Layout;