import { NavLink } from "react-router-dom";
import "../styles/tab-rail.component.css";

const TabTRail = () => {
  return (
    <div className="tab-rail-container">
      <NavLink
        to="/profile/myfollowers"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <h3>My Posts</h3>
      </NavLink>

      <NavLink
        to="/profile/following"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <h3>Following</h3>
      </NavLink>
    </div>
  );
};

export default TabTRail;
