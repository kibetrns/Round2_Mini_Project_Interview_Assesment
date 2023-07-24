import React, { useState, useEffect } from "react";
import ProfileCard from "../components/profile-card.component";
import TabTRail from "../components/tab-rail.component";
import { Outlet } from "react-router";

const MainProfilePage = () => {
  //TODO("Support multiple screens")

  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/8"
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const handleOnLogOutClicked = () => {
    alert("TODO")

  }

  //TODO("Fix; card not showing complete data. Add the edit icon in the top right")
  return (
    <div className="main-feed-page">
      {userData && (
        <ProfileCard
          name={userData.name}
          username={userData.username}
          email={userData.email}
          street={userData.address.street}
          onLogOutClicked={handleOnLogOutClicked}
        />
      )}
      <div>
        <TabTRail />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainProfilePage;
