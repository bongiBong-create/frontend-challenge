import { Outlet } from "react-router-dom";
import { Header } from "../header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
