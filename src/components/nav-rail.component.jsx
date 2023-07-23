import NavRailItem from "./nav-rail-item.component";
import "../styles/nav-rail.component.css";
import { NavLink } from "react-router-dom";

const NavRail = () => {
  return (
    <div className="navigation-rail">
      <NavRailItem
        icon={<span class="material-symbols-outlined">star</span>}
        title={"Star App"}
        onClick={console.log("TODO")}
      />

      <NavLink
        to="/feed"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <NavRailItem
          icon={<span class="material-symbols-outlined">rss_feed</span>}
          title={"Feed"}
          onClick={console.log("TODO")}
        />
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <NavRailItem
          icon={<span class="material-symbols-outlined">person</span>}
          title={"Profile"}
          onClick={console.log("TODO")}
        />
      </NavLink>
    </div>
  );
};

export default NavRail;
