import DisplayPic from "./display-pic.component";
import "../styles/profile-card.component.css";
import GenericButton from "./generic-btn";

const ProfileCard = ({
  imageUrl,
  fullName,
  email,
  userName,
  street,
  bio,
  onLogOutClicked,
}) => {
  const logOutBtnStyle = {
    backgroundColor: "#FFE142",
    color: "white",
    fontWeight: "bolder",
    borderRadius: "8px",
    pointer: "cursor",
    padding: "8px 24px",
    textAlign: "center",
};

  return (
    <div className="profile-card-container">
      <div className="profile-card-container__Left">
        <DisplayPic imageUrl={imageUrl} altText={"Display Picture"} />
      </div>

      <div className="profile-card-continer__Right">
        <div className="profile-card-continer__Right--Top">
          <div className="profile-card-container__Right--Top--Left">
            <h3>{fullName}</h3>
            <div className="pfcRTL-Item">
              <span class="material-symbols-outlined">mail</span>
              <h3>{email}</h3>
            </div>
          </div>

          <div className="profile-card-container__Right--Top--Right">
            <h3>@{userName}</h3>
            <div className="pfcRTL-Item">
              <span class="material-symbols-outlined">location_on</span>
              <h3>{street}</h3>
            </div>
          </div>
        </div>

        <div className="profile-card-continer__Right--Middle">
          <p>
            Floral enthusiast and dedicated owner of a blooming haven, where
            nature's artistry flourishes. With a passion for flowers that knows
            no bounds, I curate exquisite bouquets and arrangements, each
            reflecting the unique essence of every bloom. Embracing the joy of
            blossoms, I strive to share nature's beauty with the world, leaving
            hearts captivated and spirits lifted, one exquisite bouquet at a
            time.
          </p>
        </div>

        <GenericButton
          styles={logOutBtnStyle}
          name={"LOG OUT"}
          onClick={onLogOutClicked}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
