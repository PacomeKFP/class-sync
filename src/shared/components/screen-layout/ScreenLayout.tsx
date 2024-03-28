import { Outlet } from "react-router-dom";
import { SideNavigation } from "../side-navigation/SideNavigation";

import "./layout.style.css";

export default function ScreenLayout() {
  return (
    <div className="app">
      <SideNavigation />
      <section className="main">
        <Outlet />
      </section>
    </div>
  );
}
