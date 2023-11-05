import { Outlet } from "react-router-dom";
import MainLayout from "./mainLayout";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div className="font-popins">
      <MainLayout>
        <div>
          <div className="w-[80%] mx-auto">
            <Outlet></Outlet>
          </div>
          <div className="bg-base-200">
            <div className="w-[80%] mx-auto">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Layout;
