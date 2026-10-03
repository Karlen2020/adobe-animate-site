import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/layout/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

function MainLayout() {
  useScrollToTop();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
