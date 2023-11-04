import { Outlet } from "react-router-dom";
import MainLayout from "./mainLayout";

const Layout = () => {
  return (
    <div className="font-popins">
      <MainLayout>
        <div className="w-[80%] mx-auto">
          <Outlet></Outlet>
        </div>
      </MainLayout>
    </div>
  );
};

export default Layout;
